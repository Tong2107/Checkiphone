
import { useState } from "react";

export default function Home() {
  const [imei, setImei] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (!imei) return;
    setLoading(true);
    try {
      const fakeResult = {
        model: "iPhone 13 Pro Max",
        color: "Graphite",
        capacity: "256GB",
        icloud: "เปิดอยู่ (Activation Lock On)",
        country: "ประเทศไทย",
        status: "ไม่ติด Blacklist"
      };
      await new Promise((r) => setTimeout(r, 1500));
      setResult(fakeResult);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4">เว็บตรวจเครื่อง</h1>
        <p className="text-center text-gray-600 mb-6">กรอก IMEI หรือ Serial Number เพื่อดูข้อมูลเครื่อง</p>
        <input
          type="text"
          value={imei}
          onChange={(e) => setImei(e.target.value)}
          placeholder="ใส่ IMEI หรือ Serial Number"
          className="w-full border rounded-xl p-3 mb-4 focus:outline-none focus:ring focus:border-blue-500"
        />
        <button
          onClick={handleCheck}
          disabled={loading}
          className="w-full bg-blue-600 text-white rounded-xl p-3 font-semibold hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "กำลังตรวจสอบ..." : "ตรวจสอบตอนนี้"}
        </button>

        {result && (
          <div className="mt-6 text-sm text-gray-800 space-y-2">
            <div><strong>รุ่น:</strong> {result.model}</div>
            <div><strong>สี:</strong> {result.color}</div>
            <div><strong>ความจุ:</strong> {result.capacity}</div>
            <div><strong>iCloud:</strong> {result.icloud}</div>
            <div><strong>ประเทศ:</strong> {result.country}</div>
            <div><strong>สถานะ:</strong> {result.status}</div>
          </div>
        )}
      </div>
    </main>
  );
}
