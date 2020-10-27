import React from 'react';
import { LinkCard } from './LinkCard';

export const LinkList = ({ links }) => {
  return (
    <div>
      <h2 className="my-4">Links</h2>
      {links?.filter(link => !link.archived).map((link) => (
        <LinkCard key={link._id} link={link} />
      ))}
      <h2 className="my-4">Archived</h2>

      {links?.filter(link => link.archived).map((link) => (
        <LinkCard key={link._id} link={link} />
      ))}
    </div>
  );
};
