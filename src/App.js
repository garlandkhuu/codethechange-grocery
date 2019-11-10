import React, {useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Modal from '@material-ui/core/Modal';
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
const ProductList = styled(Container)`
  display: flex;
  flex-direction: column;
`;

const Body = styled(Container)`
  padding: 20px 0px;
`;


const CATEGORIES = [
  {category_name: '2% Milk', category_id: '1'},
  {category_name: '3.5% Milk', category_id: '2'},
  {category_name: 'Skim Milk', category_id: '3'},
  {category_name: 'Soy Milk', category_id: '4'},
  {category_name: 'Almond Milk', category_id: '5'},
  {category_name: 'Oat Milk', category_id: '6'},
  {category_name: 'Cashew Milk', category_id: '7'},
  {category_name: '2% Cheese', category_id: '8'},
  {category_name: 'Skim Cheese', category_id: '9'},
  {category_name: 'Soy Cheese', category_id: '10'},
  {category_name: 'Almond Cheese', category_id: '11'},
  {category_name: 'Oat Cheese', category_id: '12'},
  {category_name: 'Cashew Cheese', category_id: '13'},
  {category_name: 'Goat Cheese', category_id: '14'},
  {category_name: 'Cheddar Cheese', category_id: '15'}
]
const PRODUCTS = [
  {product_name: 'Dairyland Oat Milk', category_id: '6', score:'1'},
  {product_name: 'Bob\'s Organic Oat Milk', category_id: '6',score:'2'},
  {product_name: 'Prime Minister\'s Choice Oat Milk', category_id: '6',score:'3'},
  {product_name: 'White Diamond Cheddar Cheese', category_id: '15',score:'2'},
  {product_name: 'Cracker Barrel Cheddar Cheese', category_id: '15',score:'3'},
  {product_name: 'Prime Minister\'s Cheddar Cheese', category_id: '15',score:'1'}
]


const App = () => {
  const [currentInput, setCurrentInput] = useState("");
  const [productList, setProductList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [shoppingList, setShoppingList] = useState([]);

  function selectCategory(e, v) {
    console.log(v)
    setCurrentInput(v)
  }

  function addToList(v) {
    var list = [...shoppingList, v]
    setShoppingList(list);
    setModalOpen(false);
  }

  function getProductList() {
    var item = CATEGORIES.filter(item=> item.category_name===currentInput)[0];
     var products = PRODUCTS.filter(product => product.category_id == item.category_id);
     setProductList(products);
     setModalOpen(true);
  }

  function ProductListing() {
    let table = [];
    for(let i = 0; i < productList.length; i++){
      table.push(<Button onClick={() => addToList(productList[i])}><div>{productList[i].product_name}</div><div>  | Score: {productList[i].score}</div></Button>);
    }
    return (modalOpen ? table : "");
  }

  function ShoppingListing() {
    let table = [];
    for(let i = 0; i < shoppingList.length; i++){
      table.push(<ListItem key={i}>{shoppingList[i].product_name}</ListItem>);
    }
    return table;
  }

  return (
    <React.Fragment>
    {console.log(shoppingList)}
      <CssBaseline />
      <Header>
        <Title>GreenGrocer</Title>
        {/* <Subtitle>Kickoff 2019</Subtitle> */}
      </Header>
      <Body>
      <InputContainer>
        <FreeSolo updateFunction={selectCategory}></FreeSolo>
        <Button type="submit" variant="contained" onClick={getProductList}>Search for Products</Button>
        </InputContainer>
        <ProductList>
          {ProductListing()}
        </ProductList>
        <div>Shopping List:</div>
        <List>
          {ShoppingListing()}
        </List>
      </Body>
    </React.Fragment>
  );
};

function FreeSolo(props) {
  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        defaultValue='Milk'
        onChange={props.updateFunction}
        freeSolo
        options={CATEGORIES.map(option => option.category_name)}
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
