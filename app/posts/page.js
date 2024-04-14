import Todo from "../components/Todo"

 
export const metadata= {
    title:'Posts Page'
}

export default async  function PostsPage(){

  const result=   await fetch('https://jsonplaceholder.typicode.com/posts',{
      next:{
          revalidate:120  //ISR
      },
      // cache:"no-store",    //SSR
      // cache:'force-cache' //SSG
  })
  const posts =  await result.json()
    console.log(posts)
    const postsJSX = posts.map((post)=>{
        return(
            <>
             <h1 className='mt-10 mb-2  '>{post.title}</h1>
                <h2 className='mb-10'>{post.body}</h2>
                <hr/>
            </>
        )
    })
   
    
    return(
        <>
         
           <h1 className="text-center">

            Posts Page
           </h1>

          <div style={{
              width:'70%',
              background:'white',
              padding:'10px',
              borderRadius:'20px',
              color:'black',
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              flexDirection:'column'

          }}>

               <div className='mt-10'>
                   {postsJSX}
               </div>

          </div>



         
        
          
        
        </>
    )
}