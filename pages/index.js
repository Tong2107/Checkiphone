// pages/index.js
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [imei, setImei] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imei }),
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <>
      <Head>
        <title>Apple IMEI Checker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={styles.container}>
        {/* Left section */}
        <div style={styles.left}>
          <img src="/Apple_logo_black.svg" alt="Apple Logo" style={styles.logo} />
          <h1 style={styles.title}>ตรวจสอบเครื่อง <b>Apple</b></h1>

          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              placeholder="กรอก IMEI หรือ Serial Number"
              value={imei}
              onChange={(e) => setImei(e.target.value)}
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              🔍 ตรวจสอบตอนนี้
            </button>
          </form>

          {result && (
            <div style={styles.resultBox}>
              <h3 style={styles.resultTitle}>ผลลัพธ์:</h3>
              <ul style={styles.resultList}>
                <li>📱 รุ่น: {result.model}</li>
                <li>🎨 สี: {result.color}</li>
                <li>💾 ความจุ: {result.capacity}</li>
                <li>🔐 iCloud: {result.icloud}</li>
                <li>🌍 ประเทศ: {result.country}</li>
                <li>⛔ สถานะ: {result.blacklist}</li>
              </ul>
            </div>
          )}
        </div>

        {/* Right section */}
        <div style={styles.right}>
          <img src="/Steve-Jobs.jpg" alt="Steve Jobs" style={styles.jobsImg} />
          <div style={styles.caption}>
            <img src="/Apple_logo_black.svg" alt="Apple Logo" style={styles.captionLogo} />
            <h2 style={styles.captionTitle}>Steve Jobs</h2>
            <p style={styles.captionDate}>1955 - 2011</p>
            <p style={styles.captionQuote}>Stay hungry. Stay foolish.</p>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '100vh',
    backgroundColor: '#000',
    color: '#fff',
  },
  left: {
    flex: 1,
    backgroundColor: '#111',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  logo: {
    width: '60px',
    marginBottom: '1.2rem',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%',
    maxWidth: '400px',
  },
  input: {
    padding: '0.8rem',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1rem',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    color: '#000',
    padding: '0.8rem',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  resultBox: {
    marginTop: '2rem',
    backgroundColor: '#222',
    borderRadius: '12px',
    padding: '1.2rem',
    textAlign: 'left',
    width: '100%',
    maxWidth: '400px',
  },
  resultTitle: {
    marginBottom: '0.5rem',
  },
  resultList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    lineHeight: '1.8',
  },
  right: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    flexDirection: 'column',
    padding: '2rem',
  },
  jobsImg: {
    width: '75%',
    height: 'auto',
    borderRadius: '12px',
    objectFit: 'cover',
  },
  caption: {
    marginTop: '1.5rem',
    textAlign: 'center',
  },
  captionLogo: {
    width: '36px',
    marginBottom: '0.6rem',
  },
  captionTitle: {
    fontSize: '1.4rem',
    margin: 0,
  },
  captionDate: {
    fontSize: '0.9rem',
    margin: 0,
    opacity: 0.7,
  },
  captionQuote: {
    marginTop: '0.6rem',
    fontStyle: 'italic',
    fontSize: '0.9rem',
    opacity: 0.9,
  },
};
