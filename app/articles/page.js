import Link from "next/link"

export const metadata= {
    title:'Articles Page'
}
   
export default function ArticlesPage () {
   
    return(
        <>
        
           <h1 className="text-center">
            Articles Page
           </h1>

           <Link href='articles/featuredarticles'>
               Featured Articles Page 
           </Link>
           
        </>
    )
}