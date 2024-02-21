import React from 'react'
import Layout from "../../components/Layout/Layout"
import errorImg from '../../img/errorimg.svg';

const PageNotFound = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center h-screen w-screen">
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img src={errorImg} alt="Error Image" className="w-1/2" />
      </div>
    </Layout>
  )
}

export default PageNotFound