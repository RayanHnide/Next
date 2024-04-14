import {Suspense} from "react";
import PostDetails from "@/app/components/PosDetails";

export default  async function PostDetailsPage({params})  {
      const postId = params.postid
     await new Promise((resolve)=>{
         setTimeout(()=>{
             resolve()
         },2000)
     })


    return (
        <div>

              <h1>
                  Post Details
              </h1>
            
            <Suspense   fallback={'Loading'}>
                <PostDetails postId={postId}/>
            </Suspense>



        </div>
    );
};

