import BookInfo from "../components/BookInfo";

export default function Hobbies() {
  return (
    <>
      <p>I like learning Japanese (hobbies page under construction)</p>
      <section id="reading-section">
        <h2>Reading Section</h2>
        <h3>Here is a list of books I am currently reading.</h3>
        <BookInfo
          iconPath="wolf_child"
          title="Wolf child: Ame & Yuki"
          altTitle="おおかみこどもの雨と雪"
          summery="Hana falls in love with a man she met in university who turns out to be part wolf. She has 2 children with him, Ame and Yuki, however her lover shortly dies after and the newly widowed Hana moves to the countryside and raises her part wolf children as a single mother."
          amazonLinks={[
            "https://www.amazon.co.jp/-/en/gp/product/B00ZOEHTRY/ref=ppx_yo_dt_b_d_asin_title_351_o00?ie=UTF8&psc=1",
            "https://www.amazon.co.uk/Wolf-Children-Yuki-Mamoru-Hosoda/dp/031640165X?nsdOptOutParam=true&refresh=1",
          ]}
        />
        <BookInfo
          iconPath="pokemon_urban_legends"
          title="ポケモンにまつわる本当にあった都市伝説"
          altTitle={null}
          summery="Short pokemon book that covers the urban legends that happened at the burned tower, located in Ecruteak City."
          amazonLinks={[
            "https://www.amazon.co.jp/%E3%83%89%E3%83%BC%E3%82%AD%E3%82%AA%E5%8D%9A%E5%A3%AB-ebook/dp/B0883DGMKR/ref=rvi_d_sccl_6/355-3248858-4940959?pd_rd_w=2bEbi&content-id=amzn1.sym.a4dc92d7-7100-437e-b3e3-2349e8298523&pf_rd_p=a4dc92d7-7100-437e-b3e3-2349e8298523&pf_rd_r=1YZXAS5P0ENNNPYX3AB9&pd_rd_wg=9M7q1&pd_rd_r=fe049152-eaae-4621-a25f-40d91bccac00&pd_rd_i=B0883DGMKR&psc=1",
          ]}
        />
      </section>
    </>
  );
}
