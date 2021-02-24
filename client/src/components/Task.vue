<template>
  <div class="taskContainer">
    <div class="content">
      <p class="date">{{ data.created }}</p>
      <p>{{ data.task }}</p>
    </div>
    <div class="deleteBtn">
      <svg viewBox="0 0 16 21" fill="none">
        <g clip-path="url(#clip0)">
          <path d="M16 1.14286H12L10.8571 0H5.14286L4 1.14286H0V3.42857H16V1.14286ZM1.14286
          18.2857C1.14286 18.8919 1.38367 19.4733 1.81233 19.902C2.24098 20.3306 2.82236 20.5714
          3.42857 20.5714H12.5714C13.1776 20.5714 13.759 20.3306 14.1877 19.902C14.6163 19.4733
          14.8571 18.8919 14.8571 18.2857V4.57143H1.14286V18.2857Z" fill="#343434"/>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="16" height="20.5714" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style lang="scss" scoped>
.taskContainer {
  margin-bottom: 2em;
  display: grid;
  grid-template-columns: 1fr 0.1fr;
  align-items: center;
  background: map-get($colors, task-bg);
  border-radius: 5px 0 0 5px;
  .deleteBtn {
    display: grid;
    place-content: center center;
    height: 100%;
    width: 100%;
    background: map-get($colors, task-delete-bg);
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    svg {
      width: 1.6em;
      height: 1.6em;
    }
  }
  .content {
    padding: 1.8em 3em;
    padding-top: 2em;
    position: relative;
    font-family: $task-font;
    color: $task-color;
    overflow: hidden;
    line-height: 1.2;
    .date {
      position: absolute;
      top: 0.6em;
      left: 0.8em;
      color: $date-color;
      font-size: 0.8em;
      font-style: $date-style;
    }
  }
}
</style>
