import React from "react";
import { Helmet } from "react-helmet";
const Meta = ({ description, meta, title }) => {
   return (
      <Helmet
         title={title}
         meta={[
            {
               name: `description`,
               content: description,
            },
            {
               property: `og:title`,
               content: title,
            },
            {
               property: `og:description`,
               content: description,
            },
            {
               property: `og:type`,
               content: `website`,
            },
            {
               name: `twitter:title`,
               content: title,
            },
            {
               name: `twitter:description`,
               content: description,
            },
         ].concat(meta)}
      >
         <meta property="og:description" content={description} />
         <meta name="description" content={description} />
      </Helmet>
   );
};

export default Meta;
