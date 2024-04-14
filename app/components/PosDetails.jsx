import {Suspense} from "react";

export default  async function PostDetails({postId})  {

    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },2000)
    })
    const result=   await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
        next:{
            revalidate:120  //ISR
        },
        // cache:"no-store",    //SSR
        // cache:'force-cache' //SSG
    })
    const posts =  await result.json()

    return (
        <div>



            <div style={{
                width:'70%',
                background:'white',
                padding:'10px',
                borderRadius:'20px',
                color:'black',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'column',
                marginTop:'30px'
            }}>



                <h1>
                    {posts.title}
                </h1>
                <p>{posts.body}</p>

            </div>


        </div>
    );
};

