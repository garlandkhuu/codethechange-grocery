import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

import styled from "styled-components";

const Header = styled.div`
  background-color: #6fbf83;
  padding: 10px 0px;
  text-align: center;
  font-family: "Raleway";
  font-weight: bold;
  color: white;
  border-bottom: #349c85 20px solid;
`;

const Title = styled.div`
  font-size: 20px;
`;

const Subtitle = styled.div`
  font-size: 30px;
`;

const InputContainer = styled(Container)`
  display: flex;
  flex-direction: row;
`;

const Body = styled(Container)`
  padding: 20px 0px;
`;


const ITEMS = [
  {category_name: '2% Milk'},
  {category_name: '3.5% Milk'},
  {category_name: 'Skim Milk'},
  {category_name: 'Soy Milk'},
  {category_name: 'Almond Milk'},
  {category_name: 'Oat Milk'},
  {category_name: 'Cashew Milk'},
  {category_name: '2% Cheese'},
  {category_name: 'Skim Cheese'},
  {category_name: 'Soy Cheese'},
  {category_name: 'Almond Cheese'},
  {category_name: 'Oat Cheese'},
  {category_name: 'Cashew Cheese'},
  {category_name: 'Goat Cheese'}
]


const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header>
        <Title>GreenGrocer</Title>
        {/* <Subtitle>Kickoff 2019</Subtitle> */}
      </Header>
      <Body>
      <InputContainer>
        <FreeSolo defaultValue='Milk'></FreeSolo> 
        <Button variant="contained" >Default</Button>
        </InputContainer>
        <List>
          <ListItem>3.5% Whole Milk</ListItem><ListItemIcon></ListItemIcon>
        </List>
      </Body>
    </React.Fragment>
  );
};

function FreeSolo() {
  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        freeSolo
        options={ITEMS.map(option => option.category_name)}
        renderInput={params => (
          <TextField {...params} label="freeSolo" margin="normal" variant="outlined" fullWidth />
        )}
      />
    </div>
  );
}

// function List() {
//   return (
//     <div>
//       <ul>
//         <li>Handle back-end REST API</li>
//         <li>Create simple template</li>
//       </ul>
//     </div>
//   );
// }

export default App;
