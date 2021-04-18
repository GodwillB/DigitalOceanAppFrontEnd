export default function Posts(){
return(
<div>{post.Title}</div>
)
}
//tell next.js how many pages
export async function getStaticPaths(){
    const res = await fetch('http://localhost:1337/posts');
    const posts = await res.json();

    const paths = posts.map((post =>({
       params: {slug: post.Slug},
    }));

    return{
        paths:[],
        fallback:false
    }
};

// for each individual page
export async function getStaticProps({ params }){

    const { slug } = params;

    const res = await fetch('http://localhost:1337/posts?slug=${slug}');
    const data = await res.json();
    const post =data[0];
};