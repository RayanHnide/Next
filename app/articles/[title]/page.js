"use-client"
export default function ShowArticlesPage (props){
    console.log(props);
    
    return(
        <>
              <h1>

               {props.params.title}
              </h1>
        
        </>
    )
}