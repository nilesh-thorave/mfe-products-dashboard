import { Card, Typography } from "antd";
import {
  HeartTwoTone,
  ShoppingCartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
const { Paragraph } = Typography;
const ProductCard = ({ title, description, image }) => {
  return (
    <Card
      hoverable
      cover={<img alt={title} src={image} height="500px" />}
      actions={[
        <HeartTwoTone twoToneColor="red" />,
        <ShoppingCartOutlined />,
        <ShareAltOutlined />,
      ]}
    >
      <Meta
        title={title}
        description={
          <Paragraph ellipsis={{ rows: 3 }}>{description}</Paragraph>
        }
      />
    </Card>
  );
};

export default ProductCard;
