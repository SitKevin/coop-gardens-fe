import { PersonalInfo } from "./PersonalInfo"
import ProductForm from "./ProductForm"
import PostForm from "./PostForm"
import { MetricCard } from "./MetricCard"

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
  yield: 3200,
  seasons: 4,
  totalOrders: 86,
  avgRating: 4.5,
}

export default function FarmerDashboard({ profile }: { profile: any }) {
  // sử dụng mock data thay vì gọi API
  const products = mockProducts
  const posts = mockPosts
  const m = mockMetrics
  const metrics = [
    { label: "Cây trồng", value: m.crops },
    { label: "Tổng sản lượng (kg)", value: m.yield },
    { label: "Mùa vụ", value: m.seasons },
    { label: "Tổng đơn hàng", value: m.totalOrders },
    { label: "Đánh giá TB", value: `${m.avgRating.toFixed(1)} ★` },
  ]

  return (
    <div className="p-6 space-y-8">
      <PersonalInfo profile={profile} />

      {/* Metrics Overview */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {metrics.map((mt) => (
          <MetricCard key={mt.label} label={mt.label} value={mt.value} />
        ))}
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