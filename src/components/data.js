import { nanoid } from "nanoid"
import sonyXM4 from "../images/sonyxm4.png"
import airpodsPro from "../images/airpodspro.png"
import mbp16 from "../images/mbp16.png"
import rtx3090 from "../images/rtx3090.png"

const data = [
  {
    "name": "Sony WH-1000 XM4",
    "brand": "Sony",
    "price": 250,
    "id": nanoid(),
    "src": sonyXM4,
   },
  // {
  //   "name": "Apple Airpods Pro",
  //   "brand": "Apple",
  //   "price": 180,
  //   "id": nanoid(),
  //   "src": airpodsPro,
  // },
  // {
  //   "name": 'Apple Macbook Pro 16',
  //   "brand": "Apple",
  //   "price": 2800,
  //   "id": nanoid(),
  //   "src": mbp16,
  // },
  // {
  //   "name": "NVIDIA RTX 3090",
  //   "brand": "NVIDIA",
  //   "price": 899,
  //   "id": nanoid(),
  //   "src": rtx3090,
  // },
  // {
  //   "name": "",
  //   "brand": "",
  //   "price": 0,
  //   "id": nanoid(),
  //   "src": "",
  // }
]

export default data