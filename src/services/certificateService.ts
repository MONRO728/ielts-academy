import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { Certificate, TestAttempt } from '../types';

/**
 * Service to handle Certificate Generation, Public Verification,
 * and Database persistence.
 */
export const certificateService = {
  // 1. Publicly verify certificate without requiring authentication
  async verifyCertificate(certificateId: string): Promise<{
    found: boolean;
    certificate?: {
      certificateId: string;
      studentName: string;
      courseName: string;
      issuedAt: string;
      isValid: boolean;
    };
    error?: string;
  }> {
    const cleanId = certificateId.trim().toUpperCase();

    if (isSupabaseConfigured) {
      try {
        const { data, error } = await supabase
          .from('certificates')
          .select('certificate_id, student_name, course_name, issued_at, is_valid')
          .eq('certificate_id', cleanId)
          .single();

        if (error || !data) {
          return { found: false, error: 'Sertifikat topilmadi yoki haqiqiy emas.' };
        }

        return {
          found: true,
          certificate: {
            certificateId: data.certificate_id,
            studentName: data.student_name,
            courseName: data.course_name,
            issuedAt: new Date(data.issued_at).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }),
            isValid: data.is_valid
          }
        };
      } catch (err: any) {
        return { found: false, error: err.message };
      }
    }

    // Local / Offline fallback lookup
    const allCerts = JSON.parse(localStorage.getItem('ielts_public_certificates') || '[]');
    const match = allCerts.find((c: any) => c.certificateId === cleanId);

    if (match) {
      return { found: true, certificate: match };
    }

    // Check if current user has this certificate in their progress
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('ielts_progress_')) {
        try {
          const prog = JSON.parse(localStorage.getItem(key) || '{}');
          if (prog.certificateId === cleanId) {
            return {
              found: true,
              certificate: {
                certificateId: cleanId,
                studentName: 'IELTS Graduate Student',
                courseName: 'IELTS Online Learning Platform',
                issuedAt: prog.certificateIssuedAt || '2026-11-24',
                isValid: true
              }
            };
          }
        } catch {}
      }
    }

    return { found: false, error: "Bunday ID raqamli sertifikat tizimda ro'yxatdan o'tmagan." };
  },

  // 2. Persist certificate to database
  async saveCertificate(userId: string, studentName: string, certificateId: string) {
    const certRecord = {
      certificate_id: certificateId,
      user_id: userId,
      student_name: studentName,
      course_name: 'IELTS',
      issued_at: new Date().toISOString(),
      is_valid: true
    };

    if (isSupabaseConfigured) {
      await supabase.from('certificates').upsert(certRecord, { onConflict: 'user_id' });
    }

    // Keep locally accessible
    const allCerts = JSON.parse(localStorage.getItem('ielts_public_certificates') || '[]');
    const existingIndex = allCerts.findIndex((c: any) => c.certificateId === certificateId);
    const item = {
      certificateId,
      studentName,
      courseName: 'IELTS',
      issuedAt: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      isValid: true
    };

    if (existingIndex >= 0) {
      allCerts[existingIndex] = item;
    } else {
      allCerts.push(item);
    }
    localStorage.setItem('ielts_public_certificates', JSON.stringify(allCerts));
  }
};
