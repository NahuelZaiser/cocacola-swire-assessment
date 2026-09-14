import type { ErrorItem } from '@/types';

const matches: ErrorItem[] = [
  { sku: 'CC-ORIG-355-24', desc: 'Coca-Cola Original 355 mL', invQty: 24, physQty: 24, invLot: 'L-1101', physLot: 'L-1101', match: true },
  { sku: 'CC-ZRO-355-24', desc: 'Coca-Cola Zero 355 mL', invQty: 24, physQty: 24, invLot: 'L-1102', physLot: 'L-1102', match: true },
  { sku: 'SPR-LEMON-355-24', desc: 'Sprite Limón 355 mL', invQty: 24, physQty: 24, invLot: 'L-1103', physLot: 'L-1103', match: true },
  { sku: 'FAN-ORANGE-355-24', desc: 'Fanta Naranja 355 mL', invQty: 24, physQty: 24, invLot: 'L-1104', physLot: 'L-1104', match: true },
  { sku: 'MNST-ENERGY-473-12', desc: 'Monster Energy 473 mL', invQty: 12, physQty: 12, invLot: 'L-1105', physLot: 'L-1105', match: true },
  { sku: 'PWR-BERRY-600-12', desc: 'Powerade Mountain Berry 600 mL', invQty: 12, physQty: 12, invLot: 'L-1106', physLot: 'L-1106', match: true },
  { sku: 'TOP-CHICO-355-12', desc: 'Topo Chico Mineral 355 mL', invQty: 12, physQty: 12, invLot: 'L-1107', physLot: 'L-1107', match: true },
  { sku: 'DSN-WATER-500-24', desc: 'Dasani Agua 500 mL', invQty: 24, physQty: 24, invLot: 'L-1108', physLot: 'L-1108', match: true },
  { sku: 'CC-LIGHT-355-24', desc: 'Coca-Cola Light 355 mL', invQty: 24, physQty: 24, invLot: 'L-1109', physLot: 'L-1109', match: true },
  { sku: 'CC-CLASSIC-2L-06', desc: 'Coca-Cola Classic 2 L', invQty: 6, physQty: 6, invLot: 'L-1110', physLot: 'L-1110', match: true },
  { sku: 'SPR-ZERO-500-24', desc: 'Sprite Zero 500 mL', invQty: 24, physQty: 24, invLot: 'L-1111', physLot: 'L-1111', match: true },
  { sku: 'FAN-GRAPE-355-12', desc: 'Fanta Uva 355 mL', invQty: 12, physQty: 12, invLot: 'L-1112', physLot: 'L-1112', match: true },
  { sku: 'MNST-ULTRA-473-12', desc: 'Monster Ultra 473 mL', invQty: 12, physQty: 12, invLot: 'L-1113', physLot: 'L-1113', match: true },
  { sku: 'PWR-ION-600-12', desc: 'Powerade Ion 600 mL', invQty: 12, physQty: 12, invLot: 'L-1114', physLot: 'L-1114', match: true },
  { sku: 'TOP-CHICO-LIME-355-12', desc: 'Topo Chico Lime 355 mL', invQty: 12, physQty: 12, invLot: 'L-1115', physLot: 'L-1115', match: true },
  { sku: 'DSN-SPARK-355-12', desc: 'Dasani Sparkling 355 mL', invQty: 12, physQty: 12, invLot: 'L-1116', physLot: 'L-1116', match: true },
  { sku: 'CC-VANILLA-355-12', desc: 'Coca-Cola Vanilla 355 mL', invQty: 12, physQty: 12, invLot: 'L-1117', physLot: 'L-1117', match: true },
  { sku: 'CC-ORIG-500-12', desc: 'Coca-Cola Original 500 mL', invQty: 12, physQty: 12, invLot: 'L-1118', physLot: 'L-1118', match: true },
  { sku: 'SPR-ORANGE-500-12', desc: 'Sprite Naranja 500 mL', invQty: 12, physQty: 12, invLot: 'L-1119', physLot: 'L-1119', match: true },
  { sku: 'FAN-PINEAPPLE-355-12', desc: 'Fanta Piña 355 mL', invQty: 12, physQty: 12, invLot: 'L-1120', physLot: 'L-1120', match: true },
  { sku: 'MNST-MANGO-473-12', desc: 'Monster Mango 473 mL', invQty: 12, physQty: 12, invLot: 'L-1121', physLot: 'L-1121', match: true },
  { sku: 'PWR-ORANGE-600-12', desc: 'Powerade Orange 600 mL', invQty: 12, physQty: 12, invLot: 'L-1122', physLot: 'L-1122', match: true },
  { sku: 'TOP-CHICO-GRAPE-355-12', desc: 'Topo Chico Uva 355 mL', invQty: 12, physQty: 12, invLot: 'L-1123', physLot: 'L-1123', match: true },
  { sku: 'DSN-CITRUS-500-24', desc: 'Dasani Citrus 500 mL', invQty: 24, physQty: 24, invLot: 'L-1124', physLot: 'L-1124', match: true },
  { sku: 'CC-CAFE-355-24', desc: 'Coca-Cola Sin Café 355 mL', invQty: 24, physQty: 24, invLot: 'L-1125', physLot: 'L-1125', match: true },
  { sku: 'CC-ORIG-1L-06', desc: 'Coca-Cola Original 1 L', invQty: 6, physQty: 6, invLot: 'L-1126', physLot: 'L-1126', match: true },
  { sku: 'SPR-LYMON-450-12', desc: 'Sprite Limonada 450 mL', invQty: 12, physQty: 12, invLot: 'L-1127', physLot: 'L-1127', match: true },
  { sku: 'FAN-BERRY-355-12', desc: 'Fanta Berry 355 mL', invQty: 12, physQty: 12, invLot: 'L-1128', physLot: 'L-1128', match: true },
  { sku: 'MNST-ROAST-473-12', desc: 'Monster Roast 473 mL', invQty: 12, physQty: 12, invLot: 'L-1129', physLot: 'L-1129', match: true },
  { sku: 'PWR-PUNCH-600-12', desc: 'Powerade Punch 600 mL', invQty: 12, physQty: 12, invLot: 'L-1130', physLot: 'L-1130', match: true },
  { sku: 'TOP-CHICO-POMELO-355-12', desc: 'Topo Chico Pomelo 355 mL', invQty: 12, physQty: 12, invLot: 'L-1131', physLot: 'L-1131', match: true },
  { sku: 'DSN-ORIGIN-500-24', desc: 'Dasani Original 500 mL', invQty: 24, physQty: 24, invLot: 'L-1132', physLot: 'L-1132', match: true },
  { sku: 'CC-FIRE-355-24', desc: 'Coca-Cola Fire 355 mL', invQty: 24, physQty: 24, invLot: 'L-1133', physLot: 'L-1133', match: true },
  { sku: 'CC-PET-2L-06', desc: 'Coca-Cola PET 2 L', invQty: 6, physQty: 6, invLot: 'L-1134', physLot: 'L-1134', match: true },
  { sku: 'SPR-ZERO-2L-06', desc: 'Sprite Zero 2 L', invQty: 6, physQty: 6, invLot: 'L-1135', physLot: 'L-1135', match: true },
  { sku: 'FAN-COCONUT-355-12', desc: 'Fanta Coco 355 mL', invQty: 12, physQty: 12, invLot: 'L-1136', physLot: 'L-1136', match: true },
  { sku: 'MNST-WHITE-473-12', desc: 'Monster White 473 mL', invQty: 12, physQty: 12, invLot: 'L-1137', physLot: 'L-1137', match: true },
  { sku: 'PWR-LEMON-600-12', desc: 'Powerade Limón 600 mL', invQty: 12, physQty: 12, invLot: 'L-1138', physLot: 'L-1138', match: true },
  { sku: 'TOP-CHICO-CITRUS-355-12', desc: 'Topo Chico Citrus 355 mL', invQty: 12, physQty: 12, invLot: 'L-1139', physLot: 'L-1139', match: true },
  { sku: 'DSN-BERRY-500-24', desc: 'Dasani Berry 500 mL', invQty: 24, physQty: 24, invLot: 'L-1140', physLot: 'L-1140', match: true },
];

const reservedMatchSkus = new Set(matches.map((item) => item.sku));

const normalizeMismatchSkus = <T extends ErrorItem>(items: T[], category: NonNullable<T['discrepancyType']>): T[] =>
  items.map((item, index) => {
    const sameSkuAsMatch = reservedMatchSkus.has(item.sku);
    const sameSkuInSameBatch = items.slice(0, index).some((prev) => prev.sku === item.sku);

    if (!sameSkuAsMatch && !sameSkuInSameBatch) return item;

    const uniqueSku = `${item.sku}-${category.toUpperCase()}-${index + 1}`;
    const uniqueInvSkuPhys = item.invSkuPhys ? `${item.invSkuPhys}-${category.toUpperCase()}-${index + 1}` : item.invSkuPhys;

    return {
      ...item,
      sku: uniqueSku,
      invSkuPhys: uniqueInvSkuPhys,
    };
  });

const skuDiscrepancies: ErrorItem[] = normalizeMismatchSkus([
  { sku: 'CC-SCAN-12OZ-24PK', desc: 'Coca-Cola Lata Sleek 12 oz', invSkuPhys: 'CC-CAN-12OZ-24PK', physDesc: 'Coca-Cola Lata Convencional 12 oz', invQty: 24, physQty: 24, invLot: 'L-0409A', physLot: 'L-0409A', match: false, discrepancyType: 'sku', reason: 'SKU del pallet difiere del remito' },
  { sku: 'SPR-ZRO-20OZ-24BTL', desc: 'Sprite Zero 20 oz', invSkuPhys: 'SPR-ZRO-16OZ-24BTL', physDesc: 'Sprite Zero 20 oz', invQty: 24, physQty: 24, invLot: 'L-0410A', physLot: 'L-0410A', match: false, discrepancyType: 'sku', reason: 'Código del envase no coincide' },
  { sku: 'PWR-ZERO-FRTP-20OZ', desc: 'Powerade Zero Fruit Punch 20 oz', invSkuPhys: 'PWR-FRTP-20OZ', physDesc: 'Powerade Zero Fruit Punch 20 oz', invQty: 24, physQty: 24, invLot: 'L-0413A', physLot: 'L-0413A', match: false, discrepancyType: 'sku', reason: 'SKU físico incorrecto' },
  { sku: 'CC-ZRO-CAN-355-24', desc: 'Coca-Cola Zero 355 mL', invSkuPhys: 'CC-ZOR-CAN-355-24', physDesc: 'Coca-Cola Zero 355 mL', invQty: 24, physQty: 24, invLot: 'L-2026-K', physLot: 'L-2026-K', match: false, discrepancyType: 'sku', reason: 'Error tipográfico del SKU' },
  { sku: 'CC-CAFF-FREE-355', desc: 'Coca-Cola Sin Café 355 mL', invSkuPhys: 'CC-CAF-FREE-355', physDesc: 'Coca-Cola Sin Café 355 mL', invQty: 24, physQty: 24, invLot: 'L-2026-Z', physLot: 'L-2026-Z', match: false, discrepancyType: 'sku', reason: 'SKU físico mal redactado' },
  { sku: 'MNST-ULTRA-473-12', desc: 'Monster Ultra 473 mL', invSkuPhys: 'MNST-ULTR-473-12', physDesc: 'Monster Ultra 473 mL', invQty: 12, physQty: 12, invLot: 'L-2201', physLot: 'L-2201', match: false, discrepancyType: 'sku', reason: 'Referencia física no coincide' },
  { sku: 'TOP-CHI-TWST-GRPF', desc: 'Topo Chico Twist Pomelo 355 mL', invSkuPhys: 'TOP-CHI-TWST-GRP4', physDesc: 'Topo Chico Twist Pomelo 355 mL', invQty: 12, physQty: 12, invLot: 'LOT-2026-A', physLot: 'LOT-2026-A', match: false, discrepancyType: 'sku', reason: 'Código del producto alterado' },
  { sku: 'FAN-ORG-PET-2000', desc: 'Fanta Naranja 2 L', invSkuPhys: 'FAN-ROG-PET-2000', physDesc: 'Fanta Naranja 2 L', invQty: 12, physQty: 12, invLot: 'L-2345', physLot: 'L-2345', match: false, discrepancyType: 'sku', reason: 'SKU físico no coincide' },
  { sku: 'DSN-SPARK-355-LIM', desc: 'Dasani Sparkling Limón 355 mL', invSkuPhys: 'DSN-SPARK-355-LME', physDesc: 'Dasani Sparkling Limón 355 mL', invQty: 12, physQty: 12, invLot: 'L-1102', physLot: 'L-1102', match: false, discrepancyType: 'sku', reason: 'Código de referencia perturbado' },
  { sku: 'CC-ZRO-CF-2000', desc: 'Coca-Cola Zero Sin Café 2 L', invSkuPhys: 'CC-ZRO-REG-2000', physDesc: 'Coca-Cola Zero Sin Café 2 L', invQty: 6, physQty: 6, invLot: 'L-4040', physLot: 'L-4040', match: false, discrepancyType: 'sku', reason: 'SKU del pallet no coincide con el remito' },
  { sku: 'SPR-CAN-355-24', desc: 'Sprite Limón 355 mL', invSkuPhys: 'SPR-SCAN-355-24', physDesc: 'Sprite Limón 355 mL', invQty: 24, physQty: 24, invLot: 'L-9011', physLot: 'L-9011', match: false, discrepancyType: 'sku', reason: 'Formato del empaque varía en el código' },
  { sku: 'PWR-BLU-600-12', desc: 'Powerade Blue 600 mL', invSkuPhys: 'PWR-BLUE-600-12', physDesc: 'Powerade Blue 600 mL', invQty: 12, physQty: 12, invLot: 'L-8821', physLot: 'L-8821', match: false, discrepancyType: 'sku', reason: 'Identificador del producto no coincide' },
  { sku: 'CC-CLASSIC-2L-06', desc: 'Coca-Cola Classic 2 L', invSkuPhys: 'CC-CLAS-2L-06', physDesc: 'Coca-Cola Classic 2 L', invQty: 6, physQty: 6, invLot: 'L-4401', physLot: 'L-4401', match: false, discrepancyType: 'sku', reason: 'SKU físico alterado' },
  { sku: 'FAN-GRAPE-355-12', desc: 'Fanta Uva 355 mL', invSkuPhys: 'FAN-GRP-355-12', physDesc: 'Fanta Uva 355 mL', invQty: 12, physQty: 12, invLot: 'L-6789', physLot: 'L-6789', match: false, discrepancyType: 'sku', reason: 'Se observa código SKU con error tipográfico' },
  { sku: 'MNST-ROAST-473-12', desc: 'Monster Roast 473 mL', invSkuPhys: 'MNST-ROAST-473-13', physDesc: 'Monster Roast 473 mL', invQty: 12, physQty: 12, invLot: 'L-6601', physLot: 'L-6601', match: false, discrepancyType: 'sku', reason: 'SKU físico corta un dígito' },
], 'sku');

const descriptionDiscrepancies: ErrorItem[] = normalizeMismatchSkus([
  { sku: 'CC-ORIG-355-24', desc: 'Coca-Cola Original 355 mL', physDesc: 'Coca-Cola Original 500 mL', invQty: 24, physQty: 24, invLot: 'L-1101', physLot: 'L-1101', match: false, discrepancyType: 'description', reason: 'La descripción del pallet no coincide con el remito' },
  { sku: 'CC-ZRO-355-24', desc: 'Coca-Cola Zero 355 mL', physDesc: 'Coca-Cola Zero Sin Café 355 mL', invQty: 24, physQty: 24, invLot: 'L-1102', physLot: 'L-1102', match: false, discrepancyType: 'description', reason: 'Descripción física presenta variante distinta' },
  { sku: 'SPR-LEMON-355-24', desc: 'Sprite Limón 355 mL', physDesc: 'Sprite Lima 355 mL', invQty: 24, physQty: 24, invLot: 'L-1103', physLot: 'L-1103', match: false, discrepancyType: 'description', reason: 'Sabor de la descripción se modificó' },
  { sku: 'FAN-ORANGE-355-24', desc: 'Fanta Naranja 355 mL', physDesc: 'Fanta Mango 355 mL', invQty: 24, physQty: 24, invLot: 'L-1104', physLot: 'L-1104', match: false, discrepancyType: 'description', reason: 'Producto físico equivale a otra variante' },
  { sku: 'MNST-ENERGY-473-12', desc: 'Monster Energy 473 mL', physDesc: 'Monster Energy 500 mL', invQty: 12, physQty: 12, invLot: 'L-1105', physLot: 'L-1105', match: false, discrepancyType: 'description', reason: 'Tamaño descrito no coincide' },
  { sku: 'PWR-BERRY-600-12', desc: 'Powerade Mountain Berry 600 mL', physDesc: 'Powerade Berry 600 mL', invQty: 12, physQty: 12, invLot: 'L-1106', physLot: 'L-1106', match: false, discrepancyType: 'description', reason: 'La descripción cambia la referencia del sabor' },
  { sku: 'TOP-CHICO-355-12', desc: 'Topo Chico Mineral 355 mL', physDesc: 'Topo Chico Twist Pomelo 355 mL', invQty: 12, physQty: 12, invLot: 'L-1107', physLot: 'L-1107', match: false, discrepancyType: 'description', reason: 'La referencia del producto en la etiqueta no coincide' },
  { sku: 'DSN-WATER-500-24', desc: 'Dasani Agua 500 mL', physDesc: 'Dasani Agua 600 mL', invQty: 24, physQty: 24, invLot: 'L-1108', physLot: 'L-1108', match: false, discrepancyType: 'description', reason: 'El tamaño físico del envase cambia' },
  { sku: 'CC-LIGHT-355-24', desc: 'Coca-Cola Light 355 mL', physDesc: 'Coca-Cola Zero 355 mL', invQty: 24, physQty: 24, invLot: 'L-1109', physLot: 'L-1109', match: false, discrepancyType: 'description', reason: 'La etiqueta marca otra variante' },
  { sku: 'SPR-ZERO-500-24', desc: 'Sprite Zero 500 mL', physDesc: 'Sprite Zero 500 mL con café', invQty: 24, physQty: 24, invLot: 'L-1111', physLot: 'L-1111', match: false, discrepancyType: 'description', reason: 'La descripción añade una variante no autorizada' },
  { sku: 'FAN-GRAPE-355-12', desc: 'Fanta Uva 355 mL', physDesc: 'Fanta Fresa 355 mL', invQty: 12, physQty: 12, invLot: 'L-1112', physLot: 'L-1112', match: false, discrepancyType: 'description', reason: 'La descripción del producto no coincide' },
  { sku: 'MNST-ULTRA-473-12', desc: 'Monster Ultra 473 mL', physDesc: 'Monster Ultra White 473 mL', invQty: 12, physQty: 12, invLot: 'L-1113', physLot: 'L-1113', match: false, discrepancyType: 'description', reason: 'Variante del producto distinta' },
  { sku: 'PWR-ION-600-12', desc: 'Powerade Ion 600 mL', physDesc: 'Powerade Berry 600 mL', invQty: 12, physQty: 12, invLot: 'L-1114', physLot: 'L-1114', match: false, discrepancyType: 'description', reason: 'La referencia del sabor se modificó' },
  { sku: 'TOP-CHICO-LIME-355-12', desc: 'Topo Chico Lime 355 mL', physDesc: 'Topo Chico Citrus 355 mL', invQty: 12, physQty: 12, invLot: 'L-1115', physLot: 'L-1115', match: false, discrepancyType: 'description', reason: 'Descripción física no coincide con la variante' },
  { sku: 'CC-VANILLA-355-12', desc: 'Coca-Cola Vanilla 355 mL', physDesc: 'Coca-Cola Vanilla 500 mL', invQty: 12, physQty: 12, invLot: 'L-1117', physLot: 'L-1117', match: false, discrepancyType: 'description', reason: 'Tamaño del etiquetado no coincide' },
], 'description');

const quantityDiscrepancies: ErrorItem[] = normalizeMismatchSkus([
  { sku: 'CC-ORIG-355-24', desc: 'Coca-Cola Original 355 mL', invQty: 24, physQty: 20, invLot: 'L-1101', physLot: 'L-1101', match: false, discrepancyType: 'quantity', reason: 'Faltan 4 unidades' },
  { sku: 'CC-ZRO-355-24', desc: 'Coca-Cola Zero 355 mL', invQty: 24, physQty: 18, invLot: 'L-1102', physLot: 'L-1102', match: false, discrepancyType: 'quantity', reason: 'Cantidad física inferior al remito' },
  { sku: 'SPR-LEMON-355-24', desc: 'Sprite Limón 355 mL', invQty: 24, physQty: 22, invLot: 'L-1103', physLot: 'L-1103', match: false, discrepancyType: 'quantity', reason: 'Hay dos unidades faltantes' },
  { sku: 'FAN-ORANGE-355-24', desc: 'Fanta Naranja 355 mL', invQty: 24, physQty: 26, invLot: 'L-1104', physLot: 'L-1104', match: false, discrepancyType: 'quantity', reason: 'Hay 2 unidades extra' },
  { sku: 'MNST-ENERGY-473-12', desc: 'Monster Energy 473 mL', invQty: 12, physQty: 9, invLot: 'L-1105', physLot: 'L-1105', match: false, discrepancyType: 'quantity', reason: 'Faltan 3 cajas' },
  { sku: 'PWR-BERRY-600-12', desc: 'Powerade Mountain Berry 600 mL', invQty: 12, physQty: 15, invLot: 'L-1106', physLot: 'L-1106', match: false, discrepancyType: 'quantity', reason: 'Hay 3 unidades de más' },
  { sku: 'TOP-CHICO-355-12', desc: 'Topo Chico Mineral 355 mL', invQty: 12, physQty: 10, invLot: 'L-1107', physLot: 'L-1107', match: false, discrepancyType: 'quantity', reason: 'Faltan 2 unidades' },
  { sku: 'DSN-WATER-500-24', desc: 'Dasani Agua 500 mL', invQty: 24, physQty: 21, invLot: 'L-1108', physLot: 'L-1108', match: false, discrepancyType: 'quantity', reason: 'Hay menos contenido físico' },
  { sku: 'CC-LIGHT-355-24', desc: 'Coca-Cola Light 355 mL', invQty: 24, physQty: 27, invLot: 'L-1109', physLot: 'L-1109', match: false, discrepancyType: 'quantity', reason: 'Cantidad física excedida' },
  { sku: 'CC-CLASSIC-2L-06', desc: 'Coca-Cola Classic 2 L', invQty: 6, physQty: 5, invLot: 'L-1110', physLot: 'L-1110', match: false, discrepancyType: 'quantity', reason: 'Falta una unidad' },
  { sku: 'SPR-ZERO-500-24', desc: 'Sprite Zero 500 mL', invQty: 24, physQty: 20, invLot: 'L-1111', physLot: 'L-1111', match: false, discrepancyType: 'quantity', reason: 'Faltan 4 unidades' },
  { sku: 'FAN-GRAPE-355-12', desc: 'Fanta Uva 355 mL', invQty: 12, physQty: 11, invLot: 'L-1112', physLot: 'L-1112', match: false, discrepancyType: 'quantity', reason: 'Falta una unidad' },
  { sku: 'MNST-ULTRA-473-12', desc: 'Monster Ultra 473 mL', invQty: 12, physQty: 14, invLot: 'L-1113', physLot: 'L-1113', match: false, discrepancyType: 'quantity', reason: 'Exceso de 2 unidades' },
  { sku: 'PWR-ION-600-12', desc: 'Powerade Ion 600 mL', invQty: 12, physQty: 8, invLot: 'L-1114', physLot: 'L-1114', match: false, discrepancyType: 'quantity', reason: 'Faltan 4 unidades' },
  { sku: 'TOP-CHICO-LIME-355-12', desc: 'Topo Chico Lime 355 mL', invQty: 12, physQty: 13, invLot: 'L-1115', physLot: 'L-1115', match: false, discrepancyType: 'quantity', reason: 'Hay una unidad extra física' },
], 'quantity');

const lotDiscrepancies: ErrorItem[] = normalizeMismatchSkus([
  { sku: 'CC-ORIG-355-24', desc: 'Coca-Cola Original 355 mL', invQty: 24, physQty: 24, invLot: 'L-1101', physLot: 'L-1109', match: false, discrepancyType: 'lot', reason: 'El lote del pallet no coincide con el remito' },
  { sku: 'CC-ZRO-355-24', desc: 'Coca-Cola Zero 355 mL', invQty: 24, physQty: 24, invLot: 'L-1102', physLot: 'L-1107', match: false, discrepancyType: 'lot', reason: 'Lote cambiado en la etiqueta física' },
  { sku: 'SPR-LEMON-355-24', desc: 'Sprite Limón 355 mL', invQty: 24, physQty: 24, invLot: 'L-1103', physLot: 'L-1104', match: false, discrepancyType: 'lot', reason: 'Lote físico distinto' },
  { sku: 'FAN-ORANGE-355-24', desc: 'Fanta Naranja 355 mL', invQty: 24, physQty: 24, invLot: 'L-1104', physLot: 'L-1110', match: false, discrepancyType: 'lot', reason: 'La etiqueta reporta otro lote' },
  { sku: 'MNST-ENERGY-473-12', desc: 'Monster Energy 473 mL', invQty: 12, physQty: 12, invLot: 'L-1105', physLot: 'L-1125', match: false, discrepancyType: 'lot', reason: 'Lote no coincide con el sistema' },
  { sku: 'PWR-BERRY-600-12', desc: 'Powerade Mountain Berry 600 mL', invQty: 12, physQty: 12, invLot: 'L-1106', physLot: 'L-1122', match: false, discrepancyType: 'lot', reason: 'Lote transpuesto' },
  { sku: 'TOP-CHICO-355-12', desc: 'Topo Chico Mineral 355 mL', invQty: 12, physQty: 12, invLot: 'L-1107', physLot: 'L-1202', match: false, discrepancyType: 'lot', reason: 'La etiqueta física tiene otro lote' },
  { sku: 'DSN-WATER-500-24', desc: 'Dasani Agua 500 mL', invQty: 24, physQty: 24, invLot: 'L-1108', physLot: 'L-1118', match: false, discrepancyType: 'lot', reason: 'Lote físico del pallet distinto' },
  { sku: 'CC-LIGHT-355-24', desc: 'Coca-Cola Light 355 mL', invQty: 24, physQty: 24, invLot: 'L-1109', physLot: 'L-1141', match: false, discrepancyType: 'lot', reason: 'Otro lote cargado en la etiqueta' },
  { sku: 'CC-CLASSIC-2L-06', desc: 'Coca-Cola Classic 2 L', invQty: 6, physQty: 6, invLot: 'L-1110', physLot: 'L-1116', match: false, discrepancyType: 'lot', reason: 'Lote no coincide con el remito' },
  { sku: 'SPR-ZERO-500-24', desc: 'Sprite Zero 500 mL', invQty: 24, physQty: 24, invLot: 'L-1111', physLot: 'L-1117', match: false, discrepancyType: 'lot', reason: 'Lote diferente en la fijación física' },
  { sku: 'FAN-GRAPE-355-12', desc: 'Fanta Uva 355 mL', invQty: 12, physQty: 12, invLot: 'L-1112', physLot: 'L-1133', match: false, discrepancyType: 'lot', reason: 'La etiqueta biométrica indica otro lote' },
  { sku: 'MNST-ULTRA-473-12', desc: 'Monster Ultra 473 mL', invQty: 12, physQty: 12, invLot: 'L-1113', physLot: 'L-1142', match: false, discrepancyType: 'lot', reason: 'Lote issue' },
  { sku: 'PWR-ION-600-12', desc: 'Powerade Ion 600 mL', invQty: 12, physQty: 12, invLot: 'L-1114', physLot: 'L-1138', match: false, discrepancyType: 'lot', reason: 'Lote de la etiqueta anterior no coincide' },
  { sku: 'TOP-CHICO-LIME-355-12', desc: 'Topo Chico Lime 355 mL', invQty: 12, physQty: 12, invLot: 'L-1115', physLot: 'L-1128', match: false, discrepancyType: 'lot', reason: 'Etiqueta física del lote no coincide' },
], 'lot');

export const errorMasterBank: ErrorItem[] = [
  ...matches,
  ...skuDiscrepancies,
  ...descriptionDiscrepancies,
  ...quantityDiscrepancies,
  ...lotDiscrepancies,
];
