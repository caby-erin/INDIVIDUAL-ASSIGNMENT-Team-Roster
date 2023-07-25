import React, { useState, useEffect } from 'react';
import { getMembers } from '../api/memberData';
import { useAuth } from '../utils/context/authContext';
import MemberCard from '../components/MemberCard';

function Home() {
  const [members, setMembers] = useState([]);
  const { user } = useAuth();

  const getAllTheMembers = () => {
    getMembers(user.uid).then(setMembers);
  };

  useEffect(() => {
    getAllTheMembers();
  }, []);

  return (
    <div className="d-flex flex-wrap">
      <div className="title-container" style={{ display: 'flex', width: '100%' }}>
        <h1
          className="title"
          style={{
            padding: '10px 20px',
            textAlign: 'center',
            color: 'white',
            margin: '100px',
            width: '100%',
          }}
        >Team
        </h1>
      </div>
      <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap-reverse', justifyContent: 'space-evenly' }}>
        {members.map((member) => (
          <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getAllTheMembers} />
        ))}
      </div>
    </div>
  );
}
export default Home;
