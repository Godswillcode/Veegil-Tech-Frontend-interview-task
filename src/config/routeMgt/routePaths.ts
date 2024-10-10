export const appRoute = {
  home: `/`,
  login_in: `/login`,
  forgot_password: `/forgot-password`,
  reset_password: `/reset-password`,
  registration: `/registration`,
  commissions: `/commissions`,
  realtor_commission: (id?: number | string) => ({
    format: `/commissions/:id`,
    path: `/commissions/${id}`,
  }),
  property_commission: (id?: number | string) => ({
    format: `/commissions/:id/property`,
    path: `/commissions/${id}/property`,
  }),
  realtors: `/realtors`,
  realtor_details: (id?: number | string) => ({
    format: `/realtors/:id`,
    path: `/realtors/${id}`,
  }),
  realtor_upLine: (id?: number | string) => ({
    format: `/realtors/:id/upline`,
    path: `/realtors/${id}/upline`,
  }),
  downLine: `/downLine`,
  properties: `/properties`,
  property_details: (id?: number | string) => ({
    format: `/properties/:id`,
    path: `/properties/${id}`,
  }),
  sales: `/sales`,
  sales_summary: (id?: number | string) => ({
    format: `/sales/:id`,
    path: `/sales/${id}`,
  }),
  sales_payment_history: (id?: number | string) => ({
    format: `/sales/:id`,
    path: `/sales/${id}`,
  }),
  sales_upLine: (id?: number | string) => ({
    format: `/sales/:id`,
    path: `/sales/${id}`,
  }),
  sales_customer: (id?: number | string) => ({
    format: `/sales/:id`,
    path: `/sales/${id}`,
  }),
  sales_relator: (id?: number | string) => ({
    format: `/sales/:id`,
    path: `/sales/${id}`,
  }),
  customers: `/customers`,
  customer_deals: (id?: number | string) => ({
    format: `/customers/:id`,
    path: `/customers/${id}`,
  }),
  customer_realtor: (id?: number | string) => ({
    format: `/customers/:id/realtor`,
    path: `/customers/${id}/realtor`,
  }),
  customer_property: (id?: number | string) => ({
    format: `/customers/:id/property`,
    path: `/customers/${id}/property`,
  }),
  customer_summary: (id?: number | string) => ({
    format: `/customers/:id/summary`,
    path: `/customers/${id}/summary`,
  }),
  customer_payment_history: (id?: number | string) => ({
    format: `/customers/:id/payment_history`,
    path: `/customers/${id}/payment_history`,
  }),
  settings: `/settings`,
  profile: `/profile`,
  editRealtorProfile: (id?: number | string) => ({
    format: `/profile/:id`,
    path: `/profile/${id}`,
  }),
};
