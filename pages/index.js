export default function Home({posts}) {
  return( 
    <div>
      {/* loop over the posts and show them */}
    {posts && 
    posts.map((post) =>(
      <div key={post.id} >
        <h2>{post.Title}</h2>
        <div>{post.users_permissions_user.username}</div>
      </div>

    ))}
   
  </div>
  )
}

export async function getStaticProps(){
  // get posts from APi
  const res = await fetch('http://localhost:1337/posts');
  const posts = await res.json();
  
  return{
    props:{ posts },
  };
}
