import { React, useState } from 'react'
import Layout from "../../components/Layout/Layout"
import {list} from './faq_list'
import Card from './Card';

const FAQs = () => {
  const [expanded, setExpanded] = useState(false);
  const [data, setData] = useState(list)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Layout>
      <div className='flex justify-center items-center'>
        <div className='w-96 sm:w-small md:w-medium'>
          {
            data.map((val, i) => 
              <Card
                key={i}
                {...val}
                expanded={expanded}
                handleChange={handleChange}
              />
            )
          }
        </div>
      </div>
    </Layout>
  )
}

export default FAQs