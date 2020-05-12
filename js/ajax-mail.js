 $(document).ready(function() {

	$('#button-sub').click(function (e) {
  
    	var form = $('#form-control');
    	var formMessages = $('.form-messege');
    	var formData = $(form).serialize();
       // window.location= url+"/setting/update_tax_rate?id="+id+"&tax_rate="+rate;
    	// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#form-control input,textarea').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});
     });
	
	
	$('#button-sub-21').click(function (e) {
		  
    	var form = $('#form-control-resume');
    	var formMessages = $('.form-messege');
    	
    	var remark ="应聘职位： ";
    	var dateCheck =$('#AdmissionConsultant').is(':checked'); 
    	if ($('#AdmissionConsultant').is(':checked')) {
    		remark= remark + $('#AdmissionConsultant').attr('name')+",";
    	}
    	if ($('#DigitalMarketingIntern').is(':checked')) {
    		remark= remark + $('#DigitalMarketingIntern').attr('name')+",";
    	}
    	if ($('#MarketingAnalyst').is(':checked')) {
    		remark= remark + $('#MarketingAnalyst').attr('name')+",";
    	}
    	if ($('#BusinessDevelopmentIntern').is(':checked')) {
    		remark= remark + $('#BusinessDevelopmentIntern').attr('name')+",";
    	}
    	if ($('#SocialMediaEditor').is(':checked')) {
    		remark= remark + $('#SocialMediaEditor').attr('name')+",";
    	}
    	if ($('#WebDeveloper').is(':checked')) {
    		remark= remark + $('#WebDeveloper').attr('name');
    	}
    	$('#form-control-resume #position').val(remark);
    	
    	var formData = $(form).serialize();
    	
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#form-control input,textarea').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});
     });
	
 });	 
