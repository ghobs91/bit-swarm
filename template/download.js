Vue.component('download', {
		  template: '<div class="block" style="right:0;">' +
		      '<div class="block-head">{{ $t("title.down") }}</div>' +
		      '<div class="block-body" >' +
		      '<div v-if="down.visible">' +
		      '<p>{{ $t("text.file") }}:{{down.name}}</p>' +
		      '<p>{{ $t("text.hash") }}:{{down.hash}}</p>' +
		      '<p>{{ $t("text.size") }}:{{down.length}}MB</p>' +
		      '<br>' +
		      '<p v-if="down.process.visible" class="process">In the process<br>{{ down.progress }}%</p>' +
		      '<p v-if="down.btns.visible"><a :href="down.url" :download="down.name">' +
		      '<label class="btn"><i class="ion-ios-copy-outline"></i>{{ $t("btn.file") }}</label>' +
		      '</a></p>' +
		      '</div>' +
		      '</div>' +
		      '</div>',
		  props: ['down'],
	      })