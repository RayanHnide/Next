
export const metadata= {
    title:'Articles Page'
}
export default function Layout ({children}){
   return(
    <>
        <div>

            <h1>
                Articles
            </h1>
            <div style={{marginTop:'50px',background:'blue',padding:'20px',borderRadius:'20px'}}>
                {children}
            </div>
        </div>
    </>
   )
}