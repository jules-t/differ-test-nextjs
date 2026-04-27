const plans = [
  {
    name: "Starter",
    price: "$19",
    detail: "Basic storefront checks for a small launch.",
  },
  {
    name: "Growth",
    price: "$49",
    detail: "Checkout guidance, weekly insights, and priority support.",
  },
];

export default function CheckoutPage() {
  return (
    <main className="checkout-page" data-differ-surface="checkout_page">
      <section className="checkout-header">
        <p className="eyebrow">Checkout</p>
        <h1>Complete your Differ demo order</h1>
        <p className="lede">
          Pick a plan and shipping speed. This fixture is intentionally static so
          Differ can focus on the customer journey and page copy.
        </p>
      </section>

      <section className="checkout-grid">
        <form className="checkout-card" aria-label="Checkout details">
          <div className="field-group">
            <h2>Plan</h2>
            <div className="plan-grid">
              {plans.map((plan, index) => (
                <label className="plan-option" key={plan.name}>
                  <input
                    defaultChecked={index === 1}
                    name="plan"
                    type="radio"
                    value={plan.name.toLowerCase()}
                  />
                  <span>
                    <strong>{plan.name}</strong>
                    <small>{plan.detail}</small>
                  </span>
                  <b>{plan.price}</b>
                </label>
              ))}
            </div>
          </div>

          <div className="field-group">
            <h2>Contact</h2>
            <label className="text-field">
              Email
              <input
                name="email"
                placeholder="you@example.com"
                type="email"
              />
            </label>
          </div>

          <div className="field-group" data-differ-surface="shipping_choice">
            <h2>Shipping</h2>
            <label className="shipping-option">
              <input defaultChecked name="shipping" type="radio" value="standard" />
              <span>
                <strong>Standard setup</strong>
                <small>Ready in 3 business days</small>
              </span>
            </label>
            <label className="shipping-option">
              <input name="shipping" type="radio" value="express" />
              <span>
                <strong>Express setup</strong>
                <small>Ready tomorrow</small>
              </span>
            </label>
          </div>

          <div className="checkout-actions" data-differ-surface="checkout_submit">
            <button type="button">Continue</button>
            <p>
              You can review details after continuing. Taxes and onboarding time
              are calculated later.
            </p>
          </div>
        </form>

        <aside className="summary-card" aria-label="Order summary">
          <h2>Order summary</h2>
          <dl>
            <div>
              <dt>Plan</dt>
              <dd>Growth</dd>
            </div>
            <div>
              <dt>Setup</dt>
              <dd>Standard</dd>
            </div>
            <div>
              <dt>Total today</dt>
              <dd>$49</dd>
            </div>
          </dl>
          <p>
            This static summary gives Differ a stable page section to inspect
            while keeping the app easy to build and serve.
          </p>
        </aside>
      </section>
    </main>
  );
}
