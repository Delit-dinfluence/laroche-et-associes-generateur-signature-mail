$(document).ready(function(){
	$('#btn-generate').on('click', function(e){
		e.preventDefault();

		let firstname = $('#firstname').val();
		let lastname = $('#lastname').val();
		let linkedin_url = $('#linkedin_url').val();
		let position_in_company = $('#position_in_company').val();
		let phone_1 = $('#phone_1').val();
		let phone_2 = $('#phone_2').val();
		let email = $('#email').val();

		let phone = phone_1;
		if(phone_2 !== ''){
			phone += ' / ' + phone_2;
		}

		let linkedin_html = '';
		if(linkedin_url !== ''){
			linkedin_html += '' +
			'<td width="6"><!-- --></td>' +
			'<td>' +
				'<a href="'+linkedin_url+'">' +
					'<img src="assets/images/picto-linkedin-2.jpg" alt="Linkedin" width="21" heigth="21" border="0" style="display: block; width: 21px; height: 21px;"/>' +
				'</a>' +
			'</td>';
		}

		let template = '' +
		'<table cellpadding="0" cellspacing="0">' +
			'<tr>' +
				'<td colspan="3" height="6" style="height: 6px; line-height: 6px;"><!-- --></td>' +
			'</tr>' +
			'<tr>' +
				'<td width="6"><!-- --></td>' +
				'<td>' +
					'<table cellpadding="0" cellspacing="0">' +
						'<tr>' +
							'<td><img src="assets/images/logo.jpg" width="339" height="90" border="0" alt="Logo Laroche & Associés" style="display: block; width: 339px; height: 90px;" /></td>' +
						'</tr>' +
						'<tr>' +
							'<td height="10" style="height: 10px; line-height: 10px;"><!-- --></td>' +
						'</tr>' +
						'<tr>' +
							'<td>' +
								'<table cellpadding="0" cellspacing="0">' +
									'<tr>' +
										'<td style="font-family: \'Arial\', sans-serif;font-size: 22px; font-weight: bold;color: #0b3a62;text-transform: uppercase;">'+firstname+' '+lastname+'</td>' +
										linkedin_html +
									'</tr>' +
								'</table>' +
							'</td>' +
						'</tr>' +
						'<tr>' +
							'<td style="font-family: \'Arial\', sans-serif;font-size: 22px; font-weight: bold;color: #007cb0;">'+position_in_company+'</td>' +
						'</tr>' +
						'<tr>' +
							'<td height="10" style="height: 10px; line-height: 10px;"><!-- --></td>' +
						'</tr>' +
						'<tr>' +
							'<td style="font-family: \'Arial\', sans-serif;font-size: 16px; color: #0b3a62;">'+phone+'</td>' +
						'</tr>' +
						'<tr>' +
							'<td style="font-family: \'Arial\', sans-serif;font-size: 16px; color: #0b3a62;">'+email+'</td>' +
						'</tr>' +
						'<tr>' +
							'<td height="10" style="height: 10px; line-height: 10px;"><!-- --></td>' +
						'</tr>' +
						'<tr>' +
							'<td style="font-family: \'Arial\', sans-serif;font-size: 16px; color: #0b3a62;">3, boulevard Gambetta 77000 Melun</td>' +
						'</tr>' +
						'<tr>' +
							'<td>' +
								'<table cellpadding="0" cellspacing="0">' +
									'<tr>' +
										'<td style="font-family: \'Arial\', sans-serif;font-size: 16px; font-weight: bold;color: #007cb0;">' +
											'<a href="https://larocheetassocies-melun.notaires.fr/" style="color: #007cb0;text-decoration: none;">larocheetassocies-melun.notaires.fr</a>' +
										'</td>' +
										'<td width="4"><!-- --></td>' +
										'<td>' +
											'<a href="https://www.facebook.com/larocheetassociesmelun">' +
												'<img src="assets/images/picto-facebook.jpg" alt="Facebook" width="21" heigth="21" border="0" style="display: block; width: 21px; height: 21px;" />' +
											'</a>' +
										'</td>' +
										'<td width="2"><!-- --></td>' +
										'<td>' +
											'<a href="https://www.linkedin.com/company/groupe-monassier">' +
												'<img src="assets/images/picto-linkedin.jpg" alt="Linkedin" width="21" heigth="21" border="0" style="display: block; width: 21px; height: 21px;" />' +
											'</a>' +
										'</td>' +
										'<td width="2"><!-- --></td>' +
										'<td>' +
											'<a href="https://twitter.com/NotairesMelun">' +
												'<img src="assets/images/picto-twitter.jpg" alt="Twitter" width="21" heigth="21" border="0" style="display: block; width: 21px; height: 21px;" />' +
											'</a>' +
										'</td>' +
									'</tr>' +
								'</table>' +
							'</td>' +
						'</tr>' +
						'<tr>' +
							'<td height="10" style="height: 10px; line-height: 10px;"><!-- --></td>' +
						'</tr>' +
						'<tr>' +
							'<td style="font-family: \'Arial\', sans-serif;font-size: 14px; color: #0b3a62;">Office équipé de la visio-conférence</td>' +
						'</tr>' +
					'</table>' +
				'</td>' +
				'<td width="6"><!-- --></td>' +
			'</tr>' +
			'<tr>' +
				'<td colspan="3" height="6" style="height: 6px; line-height: 6px;"><!-- --></td>' +
			'</tr>' +
		'</table>';

		$('#result').val(template);
	});
	
	$('#btn-copy').on('click', function(e){
		e.preventDefault();
		$("#result").select();
		document.execCommand('copy');
	});
});