import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MemberForm from '../../../components/forms/MemberForm';
import { getSingleMember } from '../../../api/memberData';

function EditMember() {
  const router = useRouter();
  const { firebaseKey } = router.query;
  const [editItem, setEditItem] = useState({});
  console.warn(firebaseKey);

  useEffect(() => {
    getSingleMember(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (<MemberForm obj={editItem} />);
}

export default EditMember;
