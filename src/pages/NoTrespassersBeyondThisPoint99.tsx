import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDnmm8PkbeNJ_Ppw1U5QBL4tsWqniLobS8",
  authDomain: "accurack360.firebaseapp.com",
  projectId: "accurack360",
  storageBucket: "accurack360.firebasestorage.app",
  messagingSenderId: "784659632157",
  appId: "1:784659632157:web:623e23b7b4af61f08136f4"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const NoTrespassersBeyondThisPoint99 = () => {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      const leadsCol = collection(db, 'leads');
      const leadsSnapshot = await getDocs(leadsCol);
      const leadsList = leadsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setLeads(leadsList);
      setLoading(false);
    };
    fetchLeads();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Admin Page</h1>
      <div className="p-8 bg-white rounded-xl shadow-lg w-full max-w-6xl overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">Leads</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Phone</th>
                <th className="px-4 py-2 border">Country Code</th>
                <th className="px-4 py-2 border">Business Name</th>
                <th className="px-4 py-2 border">Industry</th>
                <th className="px-4 py-2 border">Address</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Company Web</th>
                <th className="px-4 py-2 border">Help</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-t">
                  <td className="px-4 py-2 border">{lead.name}</td>
                  <td className="px-4 py-2 border">{lead.phone}</td>
                  <td className="px-4 py-2 border">{lead.countryCode}</td>
                  <td className="px-4 py-2 border">{lead.businessName}</td>
                  <td className="px-4 py-2 border">{lead.industry}</td>
                  <td className="px-4 py-2 border">{lead.address}</td>
                  <td className="px-4 py-2 border">{lead.email}</td>
                  <td className="px-4 py-2 border">{lead.companyWeb}</td>
                  <td className="px-4 py-2 border">{lead.help}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default NoTrespassersBeyondThisPoint99;
