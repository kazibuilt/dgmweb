import"/assets/js/jquery.validate.min.js";class n{constructor(){let t=this;this.addMethod(),this.forms=$("form"),this.forms.each((e,a)=>{let r=$(a);r.find(".btn").on("click",s=>{r.valid(),t.checkSelect(r),t.checkRadios(r)==!0&&r.valid()==!0&&r.trigger("submit")}),r.validate({rules:{name:{required:!0,minlength:2},phone:{required:!0,number:2},Email:{required:!0,email:!0}},messages:{name:{required:"Name is required",minlength:"Name must be at least 2 characters long"},phone:{required:"Enter a phone number",number:"Enter a valid phone number"}}})})}addMethod(){$.validator.addMethod("email",function(t,e){var a=/[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/;return this.optional(e)||a.test(t)},"Please enter a valid email address")}checkSelect(t){let e=t.find(".styledSelect");e.hasClass("checked")||e.addClass("error")}checkRadios(t){let e=t.find(".w-checkbox-input"),r=e.filter(".w--redirected-checked").length;return e.parent().on("click",()=>{e.removeClass("error")}),r<1?(e.addClass("error"),!1):!0}}export{n as default};
