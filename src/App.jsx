import './App.css'
import React from 'react'
import AssJsx from './AssJsx.jsx'
import Home from './ComponentsProject/Home.jsx';
import OnClick from './Events/OnClick.jsx';
import DropDownEvent from './DropDown/DropDownEvent.jsx';
import CheckBox from './DropDown/CheckBox.jsx';
import InlineVar from './Styles/Inline/InlineVar.jsx';
import ProductModule from './Styles/Module/ProductModule.jsx';
import InlineStyle from './Styles/Project/ProductList.jsx';
import ProductList from './Styles/Project/ProductList.jsx';
import TextBox from './State/TextBox.jsx';
import Counter from './State/Counter.jsx';
import SignUpObj from './State/SignUpObj.jsx';
import ToDo from './State/ToDo.jsx';
import Toggle from './State/Assignments/Toggle.jsx';
import CountryState from './State/Assignments/CountryState.jsx';
import ProductRating from './State/Assignments/ProductRating.jsx';
import PropParent from './Prop/Parent/PropParent.jsx';
import LikeAndDislike from './Prop/PropAssignment/LikeAndDislike/LikeAndDislikeParent.jsx';
import LikeAndDislikeParent from './Prop/PropAssignment/LikeAndDislike/LikeAndDislikeParent.jsx';
function App() {

    return (
    <> 
       {/* <AssJsx/>  */}
       {/* <Home/> */}
       {/* <OnClick/> */}
        <h1>********************************************</h1>
       {/* <DropDownEvent/> */}
       <h1>********************************************</h1>
       {/* <CheckBox/>
       <InlineVar/>
       <ProductModule/> */}

       {/* <ProductList/> */}


       {/* <TextBox/>
       <Counter/>
       <SignUpObj/>
       <ToDo/> */}
       {/* <Toggle/> */}
       {/* <CountryState/> */}
       {/* <ProductRating/> */}

       <PropParent/>
    
    </>
    );

}

export default App

/*
 return React.createElement(
 "h1",
 {id:'newTag', className:'newStyle', name:'newName'},
 "With out Jsx"
 );
*/
// in browser  inspect element 
//<div id="root"><h1 id="newTag" class="newStyle" name="newName">With out Jsx</h1></div>

/*
  <> 
        <div>
            <h1>with jsx</h1>
        </div>
        </>
    );
    // in browser insepect element 
//<div><h1>with jsx</h1></div>
*/