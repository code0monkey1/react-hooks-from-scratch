
//useState hook


// make a JS module
const React =(()=>{
  
  let _val;
  
  useState=(init)=>{

    let state =_val||init

    const setState=(newState)=>{_val=newState}

    return [state,setState]
    
  }

  render=(Component)=>{
    const C = Component()
    C.render()
    return C
  }
 
  return {useState,render}

})()

// function useState(init){
    
//     let _val = init
    
//     let state=() => _val

//     const setState=(newState)=>{_val=newState}

//     return [state,setState]
    
// }

const Component=()=>{
  
  const [count,setCount] = React.useState(1)

    return {
       render:()=>console.log(count),
       click:()=>setCount(count+1)
    }
  }

let App = React.render(Component)

App.click()

React.render(Component)