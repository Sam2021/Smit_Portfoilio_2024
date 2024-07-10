import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/Bentogrid";

const Grid = () => {
  return (
    <section id="about">
        <h1 className="heading pt-11">
            A Note on My{" "}
        <span className="text-purple">Background</span>
      </h1>
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
