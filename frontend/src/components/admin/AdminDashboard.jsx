import React from 'react'

function AdminDashboard() {
  return (
    <div>
      <main className="content">
          <h3 className="mb-4">Dashboard Overview</h3>
          <div className="row g-4">
            <div className="col-12 col-md-6 col-xl-3">
              <div className="card stat-card p-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="icon-badge icon-users">
                    <i className="bi bi-people" />
                  </div>
                  <div>
                    <div className="text-secondary small">Total Users</div>
                    <div className="h3 mb-0 counter" data-target={12345}>
                      0
                    </div>
                    <div className="small text-success"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
              <div className="card stat-card p-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="icon-badge icon-revenue">
                    <i className="bi bi-currency-dollar" />
                  </div>
                  <div>
                    <div className="text-secondary small">Revenue</div>
                    <div className="h3 mb-0 counter" data-target={89432}>
                      0
                    </div>
                    <div className="small text-success"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
              <div className="card stat-card p-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="icon-badge icon-orders">
                    <i className="bi bi-cart-check" />
                  </div>
                  <div>
                    <div className="text-secondary small">Orders</div>
                    <div className="h3 mb-0 counter" data-target={2847}>
                      0
                    </div>
                    <div className="small text-danger"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
              <div className="card stat-card p-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="icon-badge icon-products">
                    <i className="bi bi-box-seam" />
                  </div>
                  <div>
                    <div className="text-secondary small">Products</div>
                    <div className="h3 mb-0 counter" data-target={1234}>
                      0
                    </div>
                    <div className="small text-success"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    </div>
  )
}

export default AdminDashboard
