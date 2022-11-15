import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
const { useEffect, useState } = require("react");

export default function Detail() {
const [detail, setDetail] = useState({});
const params = useParams();

useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setDetail(data.find(mascota => mascota.id == params.mascotaId));
      });
  }, [params.mascotaId]);

 return (
    <div className="col d-flex justify-content-center">
    <Card style={{ width: "24rem", height: "20rem" }} className="mb-3 ">
    <Card.Title>{detail.nombre}</Card.Title>
    <Card.Img
    style={{ height: "14rem" }}
    variant="top"
    src={detail.foto}
    />
    <Card.Body>
    <Card.Text>{detail.raza}</Card.Text>
    </Card.Body>
    </Card>
</div>
 );
}