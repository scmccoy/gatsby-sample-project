/**
 * Server side functions for gatsby
 */
import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props}) {
  return <Layout {...props}>{element}</Layout>
};