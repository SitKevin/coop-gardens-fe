import { PersonalInfo } from "./PersonalInfo"
import ProductForm from "./ProductForm"
import PostForm from "./PostForm"

// Mock data để preview UI
const mockProducts = [
  { id: "1", name: "Táo hữu cơ" },
  { id: "2", name: "Rau muống" },
  { id: "3", name: "Cà chua" },
]
const mockPosts = [
  { id: "1", title: "Phương pháp trồng rau sạch" },
  { id: "2", title: "Chăm sóc cây ăn quả" },
  { id: "3", title: "Kỹ thuật trồng lan" },
]

// Mock metrics
const mockMetrics = {
  crops: 12,
  yield: 3200,         // ví dụ: tổng sản lượng (kg)
  seasons: 4,          // số mùa vụ đã canh tác
  totalOrders: 86,     // tổng đơn hàng
  avgRating: 4.5       // đánh giá trung bình
}

export default function FarmerDashboard({ profile }: { profile: any }) {
  const products = mockProducts
  const posts = mockPosts
  const m = mockMetrics

  return (
    <div className="p-6 space-y-8">
      <PersonalInfo profile={profile} />

      {/* Metrics Overview */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Cây trồng</h3>
          <p className="text-2xl font-bold">{m.crops}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Tổng sản lượng (kg)</h3>
          <p className="text-2xl font-bold">{m.yield}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Mùa vụ</h3>
          <p className="text-2xl font-bold">{m.seasons}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Tổng đơn hàng</h3>
          <p className="text-2xl font-bold">{m.totalOrders}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Đánh giá TB</h3>
          <p className="text-2xl font-bold">{m.avgRating.toFixed(1)} ★</p>
        </div>
      </section>

      {/* Quản lý sản phẩm */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Sản phẩm của bạn</h2>
        <ProductForm />
        <ul className="mt-4 space-y-2">
          {products.map((p) => (
            <li key={p.id} className="border p-2 rounded">
              {p.name}
            </li>
          ))}
        </ul>
      </section>

      {/* Quản lý bài viết */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Bài viết của bạn</h2>
        <PostForm />
        <ul className="mt-4 space-y-2">
          {posts.map((w) => (
            <li key={w.id} className="border p-2 rounded">
              {w.title}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}