import React from 'react';
import PageNotFound from '../components/PageNotFound';
import { Section } from '../styles/Global';

function Error() {
   return (
      <Section>
         <PageNotFound />
      </Section>
   );
}

export default Error;
