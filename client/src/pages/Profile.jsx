import styled from "styled-components";

function Profile() {
  return (
    <AppProfile>
      <section className='profile'>
        <div className='profile__me'>
          <img src='' alt='Hier könntest du stehen' className='profile__pic' />
          <h3>Philipp Kaiser</h3>
        </div>
        <h4>About:</h4>
        <p className='profile__about'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          quia, ipsa veritatis sapiente voluptas est in totam. Magni non
          quibusdam, nam at vero unde omnis, tempore illo suscipit tenetur
          architecto!
        </p>
        <h4>Skills:</h4>
        <ul className='profile__skills'>
          <li>Essen</li>
          <li>Schlafen</li>
          <li>Coden</li>
          <li>Sporten</li>
        </ul>
        <button type='submit' className='profile__logout'>
          LOGOUT
        </button>
      </section>
    </AppProfile>
  );
}

export default Profile;

const AppProfile = styled.div`
  margin-top: 100px;

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 40px;
    background-color: var(--third-c);
    color: black;
    box-shadow: 3px 3px 5px #6b6b6b;
    position: relative;
  }

  .profile__pic {
    width: 150px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .profile__me {
    display: flex;
    align-items: center;
    font-size: 15px;
  }

  .profile h4 {
    font-size: 20px;
    margin-bottom: 0;
  }

  .profile__skills {
    display: grid;
    list-style: none;
    padding: 0;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    justify-self: center;
    margin-top: 0;
  }

  .profile__skills li {
    padding: 10px;
  }

  .profile__skills li:hover {
    border-radius: 15px;
    background-color: var(--primary);
  }

  .profile__logout {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: var(--wrong-c);
    font-family: "Patrick Hand", cursive;
    font-size: 15px;
  }

  .profile__logout:active {
    transform: translate(0px, 500px);
    transition: transform 0.2s ease;
  }
`;
