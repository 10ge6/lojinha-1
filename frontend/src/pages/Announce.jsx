import React from 'react';
import FormAnnounce from '../components/FormAnnounce';

function Announce() {
   return (
      <div>
         <FormAnnounce id='' method={'POST'} text={'Cadastrar produto'} />
      </div>
   );
}

export default Announce;
