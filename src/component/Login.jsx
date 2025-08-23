import Header from "./Header";

export default function Login(){
  return (
    <div>
      <Header></Header>
      <h2>로그인</h2>
      <form action="/login_process" method="post">
        <p><input type="text" name="id" /></p>
        <p><input type="password" name="password" /></p>
        <p><input type="submit" /></p>
      </form>
      
    </div>
  );
}