import { Link } from "react-router-dom";
import { List } from "antd";
import ProductCard from "../../components/ProductCard";
import data from "../../mocks/products";

const Dashboard = () => {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 4,
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Link to={`/products/${item.id}`}>
            <ProductCard {...item} />
          </Link>
        </List.Item>
      )}
    />
  );
};

export default Dashboard;
