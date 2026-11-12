'use client';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { email } from '@/data/portfolio';
export function CopyEmail() {
  const [status, setStatus] = useState<'idle'|'copied'|'error'>('idle');
  async function copy() {
    try { await navigator.clipboard.writeText(email); setStatus('copied'); }
    catch { setStatus('error'); }
  }
  return <div className="copy-email"><button type="button" onClick={copy}>{status==='copied'?<Check size={15}/>:<Copy size={15}/>} {status==='copied'?'Email copied':'Copy email address'}</button><span role="status">{status==='error'?'Copy unavailable. Select the email address above to copy it manually.':status==='copied'?'Ready to paste into your email app.':''}</span></div>;
}
