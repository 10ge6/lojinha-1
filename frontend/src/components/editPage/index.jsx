import React from 'react';
import { useSearchParams } from 'react-router-dom';
import FormAnnounce from '../FormAnnounce';

function EditPage() {
   const [searchParams, setSearchParams] = useSearchParams();
   return <FormAnnounce id={searchParams.get('id')} method={'PATCH'} text={'Editar Produto'} />;
}

export default EditPage;
