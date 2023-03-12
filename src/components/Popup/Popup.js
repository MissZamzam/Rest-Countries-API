import React from 'react'
import { useState } from 'react'

const Popup = () => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }
  return (
    <div>
      <button 
      onClick={toggleModal}
      className='btn-modal'>
        open
      </button>
      <button data-target="#profile-dialog" data-toggle="modal" class="btn pmd-ripple-effect btn-primary " type="button">Profile Modal</button>
<div tabindex="-1" class="modal pmd-modal fade pmd-profile-modal" id="profile-dialog" style="display: none;" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-body">
				<div class="pmd-profile-modal-header ">
					<button aria-hidden="true" data-dismiss="modal" class="close" type="button"><i class="material-icons md-light pmd-xs">clear</i></button>
					<span class="pmd-profile-modal-header-bg-img" style="background-image:url(https://pro.propeller.in/assets/images/Keith-Dowd.png);"></span>
					<div class="pmd-avatar-circle">
						<img src="https://pro.propeller.in/assets/images/Keith-Dowd.png" alt="Propeller Pro Profile Detail Modal" />
					</div>
					<div class="pmd-profile-modal-info">
						<h3 class="card-title text-white">Jason Bourne</h3>
						<p class="card-subtitle mb-2 text-white">CEO & Co-Founder</p>
						<a href="javascript:void(0);" title="Twitter" class="btn btn-sm pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-light mr-1">
							<i class="pmd-svg-icons pmd-sm md-dark">
								<svg viewBox="0 0 543.684 543.684">
									<g>
										<g>
											<path d="M527.657,106.697c-2.681,0.783-5.361,1.512-8.041,2.191c-16.384,4.137-17.89-1.322-6.028-13.366
												c5.312-5.397,10.006-11.267,14.082-17.607c9.137-14.217,1.212-20.417-14.333-13.776c-5.545,2.369-11.182,4.517-16.897,6.432
												c-16.017,5.379-38.746-2.735-53.018-11.787c-18.018-11.426-38.495-17.136-61.438-17.136c-32.137,0-59.529,11.334-82.192,33.984
												c-22.656,22.662-33.99,50.062-33.99,82.191c0,4.394,0.251,8.855,0.747,13.378c0.814,7.362-11.585,12.699-28.317,10.336
												c-36.194-5.11-70.582-16.077-103.171-32.889c-32.32-16.671-60.845-37.65-85.57-62.938C37.672,73.624,21.687,74.665,17.274,90.98
												c-2.644,9.78-3.959,19.951-3.959,30.515c0,19.908,4.675,38.372,14.027,55.392c4.651,8.47,10.098,16.138,16.353,22.999
												c10.521,11.549,8.911,18.25-5.734,14.144c-14.639-4.106-25.367-10.202-25.367-9.804s0,0.722,0,0.722
												c0,28.048,8.807,52.693,26.432,73.911c10.857,13.072,23.47,23.17,37.834,30.282c15.147,7.503,22.203,11.688,13.733,12.784
												c-5.11,0.661-10.251,0.991-15.422,0.991c-3.5,0-7.172-0.159-11.003-0.483c-6.059-0.514-7.148,12.111,2.038,26.298
												c7.301,11.273,16.646,21.193,28.03,29.762c11.579,8.721,24.058,14.981,37.417,18.794c16.255,4.633,19.517,13.073,5.024,21.763
												c-35.863,21.519-75.551,32.277-119.058,32.277c-4.902,0-9.578-0.11-14.045-0.324c-7.754-0.373-2.552,6.456,12.417,14.296
												c46.775,24.499,97.43,36.738,151.972,36.738c41.237,0,79.964-6.529,116.176-19.596c36.199-13.066,67.136-30.576,92.791-52.516
												c25.655-21.94,47.779-47.173,66.365-75.711c18.581-28.537,32.424-58.33,41.543-89.376c9.106-31.053,13.666-62.167,13.666-93.342
												c0-2.809-0.024-5.331-0.067-7.552c-0.086-4.174,10.955-15.472,23.28-27.032c5.563-5.22,10.869-10.698,15.937-16.444
												C548.833,107.78,543.882,101.966,527.657,106.697z"></path>
										</g>
									</g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
								</svg>
							</i>
						</a>
						<a href="javascript:void(0);" title="Linkedin" class="btn btn-sm pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-light">
							<i class="pmd-svg-icons pmd-sm md-dark">
								<svg viewBox="0 0 552.77 552.77">
									<g>
										<g>
											<path d="M17.95,528.854h71.861c9.914,0,17.95-8.037,17.95-17.951V196.8c0-9.915-8.036-17.95-17.95-17.95H17.95
												C8.035,178.85,0,186.885,0,196.8v314.103C0,520.816,8.035,528.854,17.95,528.854z"></path>
											<path d="M17.95,123.629h71.861c9.914,0,17.95-8.036,17.95-17.95V41.866c0-9.914-8.036-17.95-17.95-17.95H17.95
												C8.035,23.916,0,31.952,0,41.866v63.813C0,115.593,8.035,123.629,17.95,123.629z"></path>
											<path d="M525.732,215.282c-10.098-13.292-24.988-24.223-44.676-32.791c-19.688-8.562-41.42-12.846-65.197-12.846
												c-48.268,0-89.168,18.421-122.699,55.27c-6.672,7.332-11.523,5.729-11.523-4.186V196.8c0-9.915-8.037-17.95-17.951-17.95h-64.192
												c-9.915,0-17.95,8.035-17.95,17.95v314.103c0,9.914,8.036,17.951,17.95,17.951h71.861c9.915,0,17.95-8.037,17.95-17.951V401.666
												c0-45.508,2.748-76.701,8.244-93.574c5.494-16.873,15.66-30.422,30.488-40.649c14.83-10.227,31.574-15.343,50.24-15.343
												c14.572,0,27.037,3.58,37.393,10.741c10.355,7.16,17.834,17.19,22.436,30.104c4.604,12.912,6.904,41.354,6.904,85.33v132.627
												c0,9.914,8.035,17.951,17.949,17.951h71.861c9.914,0,17.949-8.037,17.949-17.951V333.02c0-31.445-1.982-55.607-5.941-72.48
												S535.836,228.581,525.732,215.282z"></path>
										</g>
									</g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
								</svg>
							</i>
						</a>
					</div>
				</div>
				<div class="pmd-profile-modal-bio">
					<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
					<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
				</div>
			</div>
		</div>
	</div>
</div>

    </div>
  )
}

export default Popup
