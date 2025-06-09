import { Accordion, AccordionItem } from "@heroui/react";
import consolePallet from '../../Assets/Images/Консольные.jpg';
import mediumPallet from '../../Assets/Images/Среднегрузовые.jpg';
import depthPallet from '../../Assets/Images/Глубинные.jpg';
import shelfPallet from '../../Assets/Images/Полочные.webp'; 
import mezzaninePallet from '../../Assets/Images/Мезонинные.jpg'; 
import rackIcon from '../../Assets/Images/servicesIcons/icons8-racks-55.png'; // Импорт иконки

import './RackTypes.module.css'; 
import style from './RackTypes.module.css';

export default function RackTypes() {
  return (
    <div className={`${style.accordion}`}>
      <div className={"content"}>
        <div className={style.content}> 
          <Accordion defaultExpandedKeys={['1']}>
            <AccordionItem key="1" className={style.accordion__item} aria-label="Консольные стеллажи" title={
              <div className={style.accordion__title}>
                <img src={rackIcon} alt="Иконка стеллажа" className={style.icon} /> {/* Иконка */}
                Консольные стеллажи
              </div>
            }>
              <div className={style.accordion__content}>
                <img src={consolePallet} alt="Консольные стеллажи" />
                <p>
                  <strong>📝 Описание:</strong> Консольные стеллажи предназначены для хранения длинномерных и нестандартных грузов, таких как трубы, доски, профили и другие материалы. Они состоят из вертикальных стоек и горизонтальных консольных элементов, которые обеспечивают надежную поддержку.
                </p>
                <p>
                  <strong>🔍 Особенности:</strong>
                  <ul>
                    <li><strong>🔧 Гибкость:</strong> Возможность регулировки высоты и расстояния между полками позволяет адаптировать стеллаж под различные типы грузов.</li>
                    <li><strong>📦 Доступность:</strong> Открытая конструкция обеспечивает легкий доступ к хранимым материалам.</li>
                    <li><strong>💪 Прочность:</strong> Конструкция рассчитана на значительные нагрузки, что делает ее идеальной для промышленных и строительных предприятий.</li>
                  </ul>
                </p>
                <p><strong>🏗️ Подходит для:</strong> Строительных компаний, складов, производственных предприятий, где требуется хранение длинномерных материалов.</p>
              </div>
            </AccordionItem>

            {/* Повторите аналогичные изменения для остальных AccordionItem */}
            <AccordionItem key="2" className={style.accordion__item} aria-label="Среднегрузовые стеллажи" title={
              <div className={style.accordion__title}>
                <img src={rackIcon} alt="Иконка стеллажа" className={style.icon} />
                Среднегрузовые стеллажи
              </div>
            }>
              <div className={style.accordion__content}>
                <img src={mediumPallet} alt="Среднегрузовые стеллажи" />
                <p>
                  <strong>📝 Описание:</strong> Среднегрузовые стеллажи предназначены для хранения товаров средней тяжести, таких как коробки, паллеты и другие грузы. Они обеспечивают оптимальное использование пространства и легкий доступ к товарам.
                </p>
                <p>
                  <strong>🔍 Особенности:</strong>
                  <ul>
                    <li><strong>🔄 Модульность:</strong> Возможность комбинирования различных секций для создания индивидуальных решений.</li>
                    <li><strong>⚙️ Простота сборки:</strong> Быстрая и легкая установка без необходимости использования специального инструмента.</li>
                    <li><strong>🔒 Надежность:</strong> Высокая прочность и устойчивость к нагрузкам.</li>
                  </ul>
                </p>
                                <p><strong>🏢 Подходит для:</strong> Складов, торговых предприятий, логистических центров, где требуется эффективное хранение товаров.</p>
              </div>
            </AccordionItem>

            <AccordionItem key="3" className={style.accordion__item} aria-label="Глубинные стеллажи" title={
              <div className={style.accordion__title}>
                <img src={rackIcon} alt="Иконка стеллажа" className={style.icon} />
                Глубинные стеллажи
              </div>
            }>
              <div className={style.accordion__content}>
                <img src={depthPallet} alt="Глубинные стеллажи" />
                <p>
                  <strong>📝 Описание:</strong> Глубинные стеллажи предназначены для хранения большого количества однотипных товаров. Они позволяют максимально эффективно использовать пространство склада за счет глубокой укладки.
                </p>
                <p>
                  <strong>🔍 Особенности:</strong>
                  <ul>
                    <li><strong>📏 Экономия пространства:</strong> Позволяют хранить больше товаров на меньшей площади.</li>
                    <li><strong>🔑 Удобство доступа:</strong> Специальные механизмы обеспечивают легкий доступ к товарам, даже находящимся на задних рядах.</li>
                    <li><strong>⚡ Оптимизация процессов:</strong> Ускоряют процесс подбора и отгрузки товаров.</li>
                  </ul>
                </p>
                <p><strong>🏬 Подходит для:</strong> Складов с большим объемом однотипной продукции, таких как продукты питания, бытовая химия и другие товары.</p>
              </div>
            </AccordionItem>

            <AccordionItem key="4" className={style.accordion__item} aria-label="Полочные стеллажи" title={
              <div className={style.accordion__title}>
                <img src={rackIcon} alt="Иконка стеллажа" className={style.icon} />
                Полочные стеллажи
              </div>
            }>
              <div className={style.accordion__content}>
                <img src={shelfPallet} alt="Полочные стеллажи" />
                <p>
                  <strong>📝 Описание:</strong> Полочные стеллажи предназначены для хранения различных товаров, включая мелкие и средние предметы. Они обеспечивают удобный доступ и хорошую видимость хранимых товаров.
                </p>
                <p>
                  <strong>🔍 Особенности:</strong>
                  <ul>
                    <li><strong>🔄 Универсальность:</strong> Подходят для хранения различных типов товаров, от книг до электроники.</li>
                    <li><strong>👌 Легкость в использовании:</strong> Простая организация и доступ к товарам.</li>
                    <li><strong>🎨 Эстетика:</strong> Эстетически привлекательный вид, что делает их подходящими для торговых площадей.</li>
                  </ul>
                </p>
                <p><strong>🏪 Подходит для:</strong> Магазинов, офисов, библиотек и других мест, где требуется хранение мелких и средних товаров.</p>
              </div>
            </AccordionItem>

            <AccordionItem key="5" className={style.accordion__item} aria-label="Мезонинные стеллажи" title={
              <div className={style.accordion__title}>
                <img src={rackIcon} alt="Иконка стеллажа" className={style.icon} />
                Мезонинные стеллажи
              </div>
            }>
              <div className={style.accordion__content}>
                <img src={mezzaninePallet} alt="Мезонинные стеллажи" />
                <p>
                  <strong>📝 Описание:</strong> Мезонинные стеллажи представляют собой многоуровневые конструкции, которые позволяют максимально эффективно использовать высоту склада. Они создают дополнительное пространство для хранения и работы.
                </p>
                <p>
                  <strong>🔍 Особенности:</strong>
                  <ul>
                    <li><strong>📈 Максимизация пространства:</strong> Позволяют использовать вертикальное пространство для хранения.</li>
                    <li><strong>🔄 Гибкость:</strong> Возможность адаптации под различные нужды и типы товаров.</li>
                                        <li><strong>🛠️ Удобство работы:</strong> Обеспечивают легкий доступ к товарам на разных уровнях.</li>
                  </ul>
                </p>
                <p><strong>🏢 Подходит для:</strong> Складов, производственных помещений и логистических центров, где требуется эффективное использование пространства.</p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
