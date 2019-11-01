import React from 'react';
import DocPage from '../components/doc-page';
import { Typography as T, Box, Table, DataTable, Code } from '@fuji-ui/core';
const { THead, TBody, TR, TH, TD } = Table;

const scheme = [
  {
    title: 'Name',
    dataKey: 'name',
  },
  {
    title: 'Category',
    dataKey: 'category',
  },
  {
    title: 'Description',
    dataKey: 'desc',
  },
  {
    title: 'Status',
    dataKey: 'status',
  },
  {
    title: 'Stocked time',
    dataKey: 'update',
  },
];

// colSpread controls the intrinct width of table fields. May specify array for responsive display
const colSpread = [
  null,
  '1fr 1fr 3fr',
  '1fr 1fr 3fr 1fr',
  '1fr 1fr 2fr 1fr 1fr',
];

const data = [
  {
    name: 'Wrenches',
    category: 'Basic',
    desc:
      'This is a must in any tool box. We recommend in investing in chrome-vanadium alloy tools as they will last you for a lifetime.',
    update: '2019-11-20',
    status: 1,
  },
  {
    name: 'Ratchet',
    category: 'Basic',
    desc:
      'There are three different sizes of ratchets: ¼” (small), ⅜” (medium), and ½” (large).',
    update: '2019-11-21',
    status: 0,
  },
  {
    name: 'Screwdrivers',
    category: 'Basic',
    desc:
      'A nice set of screwdrivers is one of the basics of any well-assorted toolbox.',
    update: '2019-11-22',
    status: 1,
  },
  {
    name: 'Wire Terminal',
    category: 'Advanced',
    desc:
      'Terminals tend to get corroded by external agents. Some may cause malfunction of component.',
    update: '2019-11-23',
    status: 0,
  },
];

const renderColumn = (key, value, item) => {
  if (key === 'name') {
    return <i>{value}</i>;
  } else if (key === 'status') {
    return value === 1 ? (
      <Box
        display="inline-block"
        p="xs"
        bg="#26a69a"
        color="white"
        fontSize="13px"
        borderRadius="2px"
      >
        In Stock
      </Box>
    ) : (
      <Box
        display="inline-block"
        p="xs"
        bg="#b0bec5"
        color="black"
        fontSize="13px"
        borderRadius="2px"
      >
        Out of Stock
      </Box>
    );
  }
  return value;
};

const TablePage = props => {
  return (
    <DocPage>
      <T.H1>Table</T.H1>
      <T.P>Table format to display grid data.</T.P>

      <T.H3>Static Table</T.H3>
      <T.P>
        The <Code>Table</Code> component is used to display static table
        content.
      </T.P>
      <Table mt="m">
        <THead>
          <TR>
            <TH>Food</TH>
            <TH textAlign="right">energy (kcal)</TH>
            <TH textAlign="right">Protein (g)</TH>
            <TH textAlign="right">Sugar (g)</TH>
            <TH textAlign="right">Fat (g)</TH>
          </TR>
        </THead>
        <TBody>
          <TR>
            <TD>Donuts</TD>
            <TD textAlign="right">440</TD>
            <TD textAlign="right">4.5</TD>
            <TD textAlign="right">15</TD>
            <TD textAlign="right">24.5</TD>
          </TR>
          <TR>
            <TD>Fried Fish</TD>
            <TD textAlign="right">247</TD>
            <TD textAlign="right">15.1</TD>
            <TD textAlign="right">1.4</TD>
            <TD textAlign="right">11.4</TD>
          </TR>
          <TR>
            <TD>Pasta</TD>
            <TD textAlign="right">99</TD>
            <TD textAlign="right">4.5</TD>
            <TD textAlign="right">1.5</TD>
            <TD textAlign="right">1.0</TD>
          </TR>
        </TBody>
      </Table>

      <T.H3>Data Table</T.H3>
      <T.P>
        Use <Code>DataTable</Code> component if you want to display dynamic
        table data.
      </T.P>
      <DataTable
        mt="m"
        scheme={scheme}
        data={data}
        renderColumn={renderColumn}
      />
    </DocPage>
  );
};

export default TablePage;
