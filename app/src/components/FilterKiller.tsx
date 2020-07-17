import React from 'react';
import { useLocation } from "react-router-dom"; 
import EmailPreview from './EmailPreview';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function FilterKiller() {
  let query = useQuery();
  // ex. <homepage>?to=<to>&bcc=<bcc>
  return (
    <EmailPreview 
      to={query.get("to")} 
      cc={query.get("cc")} 
      bcc={query.get("bcc")} 
      subject={query.get("subject")} 
      body={query.get("body")} 
    />
  )
}

export default FilterKiller;
