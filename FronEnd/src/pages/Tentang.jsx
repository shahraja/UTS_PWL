
import {
  // Gunung,
  Gunung2,
  Gunung3,
  // Gunung4,
  // Gunung5,
} from "../components/Assets";

const Tentang = () => {
  return (
    <main>
      <div className="container column full-width">
        <h1>Tempat Wisata</h1>
        <div className="container row full-width bawah-gap">
          <div className="container column">
            <h3>Hutan</h3>
            <Gunung2 />
          </div>
          <div className="container column">
            <h3>Gunung Salju</h3>
            <Gunung2 />
          </div>
          <div className="container column">
            <h3>Gunung Hutan</h3>
            <Gunung3 />
          </div>
        </div>
      </div>
      <div className="container column full-width">
        <div className="container row full-width bawah-gap">
          <div className="container column">
            <h3>Gunung Salju</h3>
            <Gunung2 />
          </div>
          <div className="container column">
            <h3>Air Terjun</h3>
            <Gunung2 />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Tentang;
