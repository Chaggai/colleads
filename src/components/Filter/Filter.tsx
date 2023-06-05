import FilterItem from "./FilterItem";

const Filter = () => {
  return (
    <aside>
      <header className="mb-2 bg-white py-4">
        <h1 className="text-center font-bold">סינון לפי</h1>
      </header>
      <div className="h-[calc(100vh-182px)] overflow-y-scroll">
        <section className="mb-0.5 bg-white pb-4 pr-6">
          <h2 className="-mr-2 py-4 font-bold">סקטור מקצועי</h2>
          <FilterItem label="פסיכולוגיה" />
          <FilterItem label="קלינאות תקשורת" />
          <FilterItem label="ריפוי בעיסוק" />
          <FilterItem label="פיזיותרפיה" />
          <FilterItem label="רפואה" />
          <FilterItem label="תזונה" />
          <FilterItem label="קרימינולוגיה" />
          <FilterItem label="עבודה סוציאלית" />
        </section>
        <section className="mb-0.5 bg-white pb-4 pr-6">
          <h2 className="-mr-2 py-4 font-bold">איזור</h2>
          <FilterItem label="צפון" />
          <FilterItem label="שרון" />
          <FilterItem label="חדרה, זכרון והעמקים" />
          <FilterItem label="מרכז" />
          <FilterItem label="יהודה ושומרון ובקעת הירדן" />
          <FilterItem label="מחוז ירושלים" />
          <FilterItem label="שפלה ומישור החוף הדרומי" />
          <FilterItem label="דרום" />
        </section>
        <section className="mb-0.5 bg-white pb-4 pr-6">
          <h2 className="-mr-2 py-4 font-bold">שירות מבוקש</h2>
          <FilterItem label="טיפול" />
          <FilterItem label="אבחון" />
          <FilterItem label="ייעוץ והדרכה" />
          <FilterItem label="קייס מנג׳מנט" />
          <FilterItem label="הרצאה/סדנה" />
          <FilterItem label="הדרכה מקצועית (Supervision)" />
        </section>
      </div>
      <footer className="flex h-16 justify-end">
        <button className="ml-12 text-left text-lg font-bold text-site-lightblue">
          סנן
        </button>
      </footer>
    </aside>
  );
};
export default Filter;
