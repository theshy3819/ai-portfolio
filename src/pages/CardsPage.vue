<script setup>
import Page from '../components/Page.vue'

// 카드 쪽: 제목 + 한 줄 리드 + 카드 2×2 (번호 · 꼬리표 · 제목 · 점 목록 · 근거 칩)
// 핵심 역량, 사업 기여 방향 쪽에 씀 (content.js strengths · vision)
defineProps({ section: Object, num: String, page: Number, total: Number })
</script>

<template>
  <Page :id="section.id" tone="light" :num="num" :label="section.label" :page="page" :total="total">
    <div class="cards-page">
      <header class="head">
        <h2 class="page-title">{{ section.title }}</h2>
        <p v-if="section.lead" class="kr-lead">{{ section.lead }}</p>
      </header>

      <ol class="grid">
        <li v-for="(c, i) in section.items" :key="c.title" class="card">
          <p class="card-top">
            <span class="mono-num acc">{{ String(i + 1).padStart(2, '0') }}</span>
            <span v-if="c.tag" class="tag">{{ c.tag }}</span>
          </p>
          <h3 class="card-title">{{ c.title }}</h3>
          <ul class="lines">
            <li v-for="l in c.lines" :key="l">{{ l }}</li>
          </ul>
          <p v-if="c.chips?.length" class="chips">
            <span v-for="ch in c.chips" :key="ch" class="chip">{{ ch }}</span>
          </p>
        </li>
      </ol>

      <p v-if="section.note" class="note">{{ section.note }}</p>
    </div>
  </Page>
</template>

<style scoped>
.cards-page {
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
}

.head {
  display: grid;
  gap: 10px;
}

.grid {
  display: grid;
  flex: 1;
  min-height: 0;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: minmax(0, 1fr);
  gap: 24px;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 0;
  padding: 26px 30px;
  border: 1px solid var(--rule);
  border-radius: 14px;
  background: var(--paper);
}

.card-top {
  display: flex;
  align-items: baseline;
  gap: 14px;
}

.tag {
  font-size: 16px;
  font-weight: 600;
  color: var(--fg-muted);
}

.card-title {
  font-family: var(--f-display);
  font-size: 30px;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.02em;
  text-wrap: balance;
}

.lines li {
  position: relative;
  padding: 5px 0 5px 20px;
  font-size: 20px;
  line-height: 1.5;
  color: var(--fg-muted);
  text-wrap: pretty;
}

.lines li::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 17px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--acc);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
}

.chip {
  padding: 4px 12px;
  border: 1px solid var(--rule);
  border-radius: 999px;
  background: var(--chip-bg);
  font-size: 15px;
}

.note {
  font-size: 16px;
  color: var(--fg-muted);
}

@media screen and (max-width: 899px) {
  .grid {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }

  .card {
    padding: 22px;
  }

  .card-title {
    font-size: 24px;
  }

  .lines li {
    font-size: 17px;
  }
}
</style>
